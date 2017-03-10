# Events Manager Custom Plugin
### Description:
This plugin generates a ticket button with the function "EMHaCustom.generateTicketBtn" and a youtube video
with the fucntion "EMHaCustom.generateYoutubeLink", which can be done when creating events by adding a    customField name ="Ticket Link" and value ="link to the tickets' page", and a customField name ="YoutubeLink" and value = "a link to the youtube videos".
# Example:
In wordpress->Events->Setting->Formatting-> Single Event Format Page, you need to add a piece of code for gernerating button link:
```javascript
<script>
if('#_ATT{Ticket Link}' && '#_ATT{Ticket Link}' !== 'None') {
        jQuery('#event-excerpt').append(EMHaCustom.generateTicketBtn({
	        attr_name: 'Ticket Link',
	        ticketLink: '#_ATT{Ticket Link}'
		}));
}
</script>
and a piece of code for generating youtube video:
```javascript
<script>
if('#_ATT{Youtube Link}'){
jQuery('#ha-youtube-link').append(EMHaCustom.generateYoutubeLink({
	        attr_name: 'Youtube Link',
	        
	        youtubeLink: '#_ATT{Youtube Link}'
		}));

}else{
document.geetElementById('featured-img').style.visibility='visible';
}
</script>