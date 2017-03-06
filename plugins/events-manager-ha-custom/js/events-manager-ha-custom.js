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
			//console.log('ERROR: Unknown attribute name', options.attr_name); src="https://www.youtube.com/embed/<?php echo $id ?>?rel=0&showinfo=0&color=white&iv_load_policy=3"
    //frameborder="0" allowfullscreen
			return false;
		}

		
	}

	/** 
	  * Generate youtube video iframe
	  * @param {Object} options - {
	  * 			attr_name: "Youtube Link",
	  * 			youtubeLink: {String}
	  *         } 
	  * @return {HTML|false}
	*/
    public.generateYoutubeLink = function(options) {
		
		if(!options.youtubeLink) {
			console.log("ERROR: Undefined youtubeLink");
			return false;
		}

		if(options.attr_name === 'Youtube Link') {
<<<<<<< HEAD
			
        var extractId =  options.youtubeLink.split("v=");
        var idPos = extractId.length-1;

        var id = extractId[idPos];
       
		
       var template =  '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe class="youtubeLink" width="500"  rameborder="0" src=\'' + 'https://www.youtube.com/embed/'+id+ '\'>'+					 
				'</iframe></div>';

			/*var template =  '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe class="youtubeLink" width="500"  rameborder="0" src=\'' + options.youtubeLink + '\'>'+					 
				'</iframe></div>';*/
				
=======
			var template = ['<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="', options.youtubeLink, '" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>'].join('');

>>>>>>> 297378518638a74ab7eeda797e93070423ff44ae
			return $.parseHTML(template)[0];			
		}  else {
			//console.log('ERROR: Unknown attribute name', options.attr_name);
			return false;
		}
	}

	return public;
})(jQuery, window);



