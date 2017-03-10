# Events Manager Custom Plugin
### Description:
This plugin generates a ticket button and Ovationtix Link with the function "EMHaCustom.generateTicketBtn" and a youtube video with the fucntion "EMHaCustom.generateYoutubeLink", which can be done when creating events by adding a customField name ="Ticket Link" and value ="link to the tickets' page" or a customField name ="Ovationtix Link" and value ="Ovationtix_Link", and a customField name ="YoutubeLink" and value = "a link to the youtube video".
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

}
</script>
```