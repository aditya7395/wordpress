# Events Manager Custom Plugin
### Description:
This plugin generates a ticket button and Ovationtix Link with the function "EMHaCustom.generateTicketBtn" and a youtube video with the fucntion "EMHaCustom.generateYoutubeLink", which can be done when creating events by adding a customField name ="Ticket Link" and value ="link to the tickets' page" or a customField name ="Ovationtix Link" and value ="Ovationtix_Link", and a customField name ="YoutubeLink" and value = "a link to the youtube video".

Update: Additional method EMHaCustom.generateDetailedEventDateTime() which generates a detailed event date and time from custom field 'detailed_event_date_time'

Add this piece of code to Single Event Template
```html
<div id="datetime-#_EVENTID" 
    value="#_ATT{detailed_event_date_time}">
    <strong>Date/Time</strong> <br/>
    #_EVENTDATES<br /><i>#_EVENTTIMES</i>
</div>
<script>
  if('#_ATT{detailed_event_date_time}') { 
    var x = EMHaCustom.generateDetailedEventDateTime({
      attr_name: 'detailed_event_date_time',
      detailed_event_date_time: '#_ATT{detailed_event_date_time}'
    });
    console.log(x);
    jQuery('#datetime-#_EVENTID').html(x);
  }
</script>
```
See working example below coupled with Ticket Link, Ovationtix Link, Youtube Link
# Example:
In wordpress->Events->Setting->Formatting-> Single Event Format Page, you need to add a piece of code for generating button link:

```html
<p id="event-excerpt"></p>
<script>
if('#_ATT{Ovationtix Link}') { 
        jQuery('#event-excerpt').append(EMHaCustom.generateTicketBtn({
          attr_name: 'Ovationtix Link',
          ticketLink: '#_ATT{Ovationtix Link}',
          btnImgLink: 'http://events.ha.sjsu.edu/musicanddance/wp-content/uploads/sites/6/2016/09/BuyTickets_160px.png'
    }));
} else if('#_ATT{Ticket Link}' && '#_ATT{Ticket Link}' !== 'None') {
        jQuery('#event-excerpt').append(EMHaCustom.generateTicketBtn({
          attr_name: 'Ticket Link',
          ticketLink: '#_ATT{Ticket Link}'
    }));
}
</script>
```
and a piece of code for generating youtube video:
```html
<div id="ha-youtube-link"></div>
<script>
if('#_ATT{Youtube Link}'){
jQuery('#ha-youtube-link').append(EMHaCustom.generateYoutubeLink({
          attr_name: 'Youtube Link',
          
          youtubeLink: '#_ATT{Youtube Link}'
    }));


}else{
     document.getElementById('featured-img').style.visibility='visible';
     }
</script>
```
and a piece of code that gets the image the user selected:
ex: featured image, youtube link, or category image, otherwise the default image will be selected:
```html
<div style="display:none;" id='featured-img' class="smd-featured-img"></div>
<script>

jQuery('.entry-content-left').append(EMHaCustom.generateEntryContentLeft({

     categoryImageLink: '#_CATEGORYIMAGEURL',
     featuredImageLink: '#_EVENTIMAGEURL',
     youtubeLink: '#_ATT{Youtube Link}',
     defaultImageLink: 'http://events.ha.sjsu.edu/wp-content/uploads/2016/09/default_734x408_thumb.png'
}));


</script>
```
### Working example:
```html

<div class="entry-content-left"></div>
<div class="smd-post-content" >
   <h1>
      #_EVENTNAME
   </h1>
   <p id="event-excerpt">
      #_EVENTEXCERPT{0, }
   </p>
   <p>
      <strong>Date/Time</strong><br/>
      Date(s) - #_EVENTDATES<br /><i>#_EVENTTIMES</i>
   </p>
   <p style="margin-bottom:0px;">
      <strong>Categories</strong>
      #_CATEGORIES
   </p>
   {has_location}
   <p>
      <strong>Location</strong><br/>
      #_LOCATIONLINK <br/>
      #_LOCATIONMAP
   </p>
   {/has_location}
   <br style="clear:both" />
   #_EVENTNOTES
   {has_bookings}
   <h3>Bookings</h3>
   #_BOOKINGFORM
   {/has_bookings}
</div>
<script>
   if('#_ATT{Ovationtix Link}') { 
           jQuery('#event-excerpt').append(EMHaCustom.generateTicketBtn({
               attr_name: 'Ovationtix Link',
               ticketLink: '#_ATT{Ovationtix Link}',
               btnImgLink: 'http://events.ha.sjsu.edu/musicanddance/wp-content/uploads/sites/6/2016/09/BuyTickets_160px.png'
           }));
   } else if('#_ATT{Ticket Link}' && '#_ATT{Ticket Link}' !== 'None') {
           jQuery('#event-excerpt').append(EMHaCustom.generateTicketBtn({
               attr_name: 'Ticket Link',
               ticketLink: '#_ATT{Ticket Link}'
      }));
   }
</script>

<script>
   jQuery('.entry-content-left').append(EMHaCustom.generateEntryContentLeft({
   
        categoryImageLink: '#_CATEGORYIMAGEURL',
        featuredImageLink: '#_EVENTIMAGEURL',
        youtubeLink: '#_ATT{Youtube Link}',
        defaultImageLink: 'http://events.ha.sjsu.edu/wp-content/uploads/2016/09/default_734x408_thumb.png'
   }));
</script>

<!-- Detailed event date and time portion below -->
<div id="datetime-#_EVENTID" 
    value="#_ATT{detailed_event_date_time}">
    <strong>Date/Time</strong> <br/>
    #_EVENTDATES<br /><i>#_EVENTTIMES</i>
</div>
<script>
  if('#_ATT{detailed_event_date_time}') { 
    var x = EMHaCustom.generateDetailedEventDateTime({
      attr_name: 'detailed_event_date_time',
      detailed_event_date_time: '#_ATT{detailed_event_date_time}'
    });
    console.log(x);
    jQuery('#datetime-#_EVENTID').html(x);
  }
</script>
```