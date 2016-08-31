//Replacing poster with thumbnail
var HaCustom = (function($) {

	window.onload = function() {
		new Clipboard('.clipboard');		//init the clipboard element with class clipboard
											//USAGE: https://clipboardjs.com/
											//USAGE: add "clipboard" class to any element you want to add clipboard capability to
	};

	/**
	  * Get thumb url based on the event url
	  * This function assumes that the pictures follow the following convention:
	  * {Poster Name}_large.{Extension}
	  * {Poster Name}_thumb.{Extension} 
	  *	
	  * @param {String} eventImageUrl - the featured image url
	  * @return {String} event image url
	  */
	getThumbUrl = function(eventImageUrl) {
		if(eventImageUrl.match(/_large/)) {		//image has keyword "_large"
			var urlArr = eventImageUrl.split("_large"); //split the strings`
			urlArr.splice(-1,0,"_thumb");				//insert _thumb and replace _large
			var thumbURL = urlArr.join('');				//get the thumb url eventImageUrl,
			return thumbURL;
		} 
		return eventImageUrl;
	}


	/**
 	 * 
	 */


	var public = {};

	/*
	//TODO : build this function
	(function($) {
	var ticketLink = '#_ATT{Ticket Link}';
	var eventDate = new Date('#_EVENTDATES');
	eventDate.setDate( eventDate.getDate()-1); //offset the date
	var currentDate = new Date();
	var locationName = '#_LOCATIONNAME';

	console.log( ticketLink );
	console.log( eventDate );
	//console.log('#_LOCATIONNAME');
	if(currentDate < eventDate ) { 
		console.log("current date is < event date");
	} else {
		console.log("current date is >= event date");
	}
})(jQuery);
	*/

	/**
	  * Create a ticket button and attach it to the sibling element
	  * @param {String} siblingEle - sibling javavscript object
	  */
	public.displayTicketBtn = function(ticketLink,siblingEleId) {
		console.log("display ticket btn", ticketLink);
		ticketLink = ticketLink || 'None';
		//TODO -test this 
		if( ticketLink !== 'None' ) { //has ticket link 
			var ticketBtn = document.createElement('button');
			ticketBtn.innerHTML = ' Buy Tickets ';
			ticketBtn.style.marginBottom = "20px";
			ticketBtn.onclick = function() {
				window.location.href = ticketLink;
			}
			$(ticketBtn).insertAfter("#"+siblingEleId);

			return ticketBtn;
			// $("<p><span style='color:red;'>*</span>Online ticketing to be closed 24 hours prior to dance performance with remaining tickets to be purchased at the door with cash or checks only.</p>").insertAfter(ticketBtn);
		}
	}
		
	/**
	  * Display the thumbnail of an event which is derived from the name of the featured image. 
	  * Note: This function is intended to be used in the event list view 
	  *
	  * @param {String} eventImageUrl - the featured image url
	  * @param {String} eventName - event name
	  * @param {String} eventId - event id
	  */
	public.displayThumb = function(eventImageUrl,eventName,eventId,parent) {
		var acceptableExt = ['png','jpgs','jpeg'];
		var thumbURL = getThumbUrl(eventImageUrl);
		var thumb = document.createElement('img');

		thumb.setAttribute("alt", eventName + " Thumbnail");			//set alt text
		thumb.setAttribute("exts", acceptableExt.join(",") );
		thumb.addEventListener('load',function(){ 						//attach thumbnail image
			parent.appendChild(this);
		});
		thumb.addEventListener('error',function(e){
			e.stopPropagation();
			e.preventDefault();
			let currentSrc = e.target.src;
			let currentSrcExt = currentSrc.substring(currentSrc.lastIndexOf('.')+1);
			let exts = thumb.getAttribute('exts').split(',');
			//remove current extension from exts list
			exts = $.grep(exts, function(ele, i) {
				return ele !== currentSrcExt;
			}); 

			//select a new extenstion
			if(exts.length > 0) {
				var newExt = exts[0];
				thumb.setAttribute("exts", exts.join(",") );
				let newUrl = thumbURL.replace(new RegExp(currentSrcExt + '$'), newExt);
				thumb.src = newUrl;
				console.log(thumb,currentSrc, currentSrcExt, exts, newExt, newUrl);
			}
		},true);

		thumb.src = thumbURL;											//trigger the image load
	}

	

	/**
	  * Hide the ticket button in the number of hour before the event time. time (hours)
	  * 
	  * @param {String} hourOffSet - the number of hours offset from the event date time, this
	  * 							 is to set the cut off time
	  */
	public.hideTicketBtnIn = function(event,hourOffSet) {	//TODO: Implement
		// console.log("gfgfgfgfc");
	}

	return public;
})(jQuery);

// var test_date_object = new Date();
// console.log( test_date_object.getTime()/1000 );