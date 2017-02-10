//Replacing poster with thumbnail
var EMHaCustom = (function($, window) {
	var public = {};

	/**
 	  * Generate html for ticket button
	  * @param {Object} options - {
	  * 		attr_name: "Ovationtix Link",
	  * 		ticketLink: {String}
	  *		btnImgLink: {String}
	  * @return {HTML|false}	  
	*/
	public.generateTicketBtn = function(options) {
		if(options.attr_name === 'Ovationtix Link') {
			if(!options.ticketLink || !options.btnImgLink) {
				console.log("ERROR: Undefined ticketLink or btnImgLink");
				return false;
			}	
			var template =  '<a href=\'' + options.ticketLink + '\'>' +
				'<img src=\'' + options.btnImgLink + '\' alt="Buy Ticket"></img>' +
				'</a>';
				
			return $.parseHTML(template)[0];			
		} else {
			//console.log('ERROR: Unknown attribute name', options.attr_name);
			return false;
		}
	}	

	return public;
})(jQuery, window);