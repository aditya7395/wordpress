<?php
/*
Plugin Name: Events Manager - Time Clash
Version: 1.0
Plugin URI: http://wp-events-plugin.com
Description: Checks if a location already has an event during these times, preventing double-bookings of locations.
Author: Marcus Sykes
Author URI: http://wp-events-plugin.com
*/

/*
Copyright (c) 2012, Marcus Sykes

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

/**
 * @param boolean $result
 * @param EM_Event $EM_Event
 */
function my_em_event_validate_time_clash( $result, $EM_Event ){
    if( $result && !$EM_Event->is_recurring() && !$EM_Event->is_recurrence() ){
        if( $EM_Event->location_id > 0 ){ //location defined, let's check events at that location
            $events = EM_Events::get( array('location'=>$EM_Event->location_id, 'scope'=> array($EM_Event->event_start_date,$EM_Event->event_end_date)) );
            if( count($events) > 0 ){
                //check each event for any one that has start/end times within the ones in this new event
                foreach($events as $event){
                    /* @var $event EM_Event */
                    if( $event->event_id != $EM_Event->event_id ){ //we can't double-book the same event
	                    if( 
	                    	($event->start >= $EM_Event->start && $event->start <= $EM_Event->end) || 
	                    	($event->end >= $EM_Event->start && $event->end <= $EM_Event->end) || 
	                    	($event->start <= $EM_Event->end && $event->end >= $EM_Event->start) ||
	                    	(($event->event_start_date == $EM_Event->event_start_date || $event->event_end_date >= $EM_Event->event_end_date) && ($EM_Event->event_all_day || $event->event_all_day))
	                    ){
	                        //we have a clash!
	                        $result = false;
	                        $EM_Event->add_error('Your event clashes with another event at this location - '.$event->output('#_EVENTNAME - #_EVENTDATES @ #_EVENTTIMES'));
	                    }
                    }
                }
            }
        }
    }
    return $result;
}
add_filter('em_event_validate_meta', 'my_em_event_validate_time_clash', 10, 2);