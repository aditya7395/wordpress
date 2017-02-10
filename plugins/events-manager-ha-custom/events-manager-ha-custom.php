<?php
/*
Plugin Name: Events Manager HA Custom
Version: v1.0
Author: Duy Nguyen
Description: This plugin is for any custom feature for event manager for the ha team
/*
* Init custom code
*/
function init_event_manager_ha_custom() {
	wp_enqueue_script('events_manager_ha_custom', plugin_dir_url(__FILE__) . 'js/events-manager-ha-custom.js', array('jquery'));
}
add_action( 'wp_enqueue_scripts', 'init_event_manager_ha_custom' );