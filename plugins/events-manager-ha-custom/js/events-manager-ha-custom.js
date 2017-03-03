//Replacing poster with thumbnail
var EMHaCustom = (function($, window) {
	
	var public = {};

	/**
 	  * Generate html for ticket button
	  * @param {Object} options - {
	  * 			attr_name: "Ovationtix Link",
	  * 			ticketLink: {String},
	  *				btnImgLink: {String}, - only required for Ovationtix Link
	  *				btnName: {String} - default to "Buy Ticket"
	  *         }
	  * @return {HTML|false}	  
	*/
	public.generateTicketBtn = function(options) {

		if(!options.ticketLink) {
			console.log("ERROR: Undefined ticketLink");
			return false;
		}

		if(options.attr_name === 'Ovationtix Link') {

			if(!options.btnImgLink) {
				console.log("ERROR: Undefined btnImgLink");
				return false;	
			}

			var template =  '<a href=\'' + options.ticketLink + '\'>' +
					'<img src=\'' + options.btnImgLink + '\' alt="Buy Ticket"></img>' +
				'</a>';
				
			return $.parseHTML(template)[0];			
		} else if(options.attr_name === 'Ticket Link') {

			options.btnName = options.btnName || "Buy Ticket";

			var template =  '<a href=\'' + options.ticketLink + '\'>' +
					'<button>' + options.btnName + '</button>' +
				'</a>';
				
			return $.parseHTML(template)[0];
		} else {
			//console.log('ERROR: Unknown attribute name', options.attr_name);
			return false;
		}

		
	}

	public.generateYoutubeLink = function(options) {
		
		if(!options.youtubeLink) {

		
			console.log("ERROR: Undefined youtubeLink");
			return false;
		}

		if(options.attr_name === 'Youtube Link') {

		

			var template =  '<iframe  width="560" height="315" rameborder="0" src=\'' + options.youtubeLink + '\'>'+					 
				'</iframe>';
				
			return $.parseHTML(template)[0];			
		}  else {
			
			//console.log('ERROR: Unknown attribute name', options.attr_name);
			return false;
		}
	}

	return public;
})(jQuery, window);



