//Replacing poster with thumbnail
console.log("ha-custom is loading");

var HaCustom = (function() {
	var public = {};
	
	/**
	  * Display the thumbnail of an event which is derived from the name of the featured image. 
	  * This function assumes that the pictures follow the following convention:
	  * {Poster Name}_large.{Extension}
	  * {Poster Name}_thumb.{Extension}
	  * Note: This function is intended to be used in the event list view 
	  * @param {String} eventImageUrl - the featured image url
	  * @param {String} eventName - event name
	  * @param {String} eventId - event id
	  */
	  // TODO: test and complete this function 
	public.displayThumb = function(eventImageUrl,eventName,eventId) {
		//Replacing poster with thumbnail
		var urlArr = eventImageUrl.split("_large"); //split the strings
		urlArr.splice(-1,0,"_thumb");				//insert _thumb and replace _large
		var thumbURL = urlArr.join('');				//get the thumb url

		console.log(urlArr,thumbURL);
		// var thumb = document.createElement('img');

		// thumb.className = "attachment-150x150 wp-post-image";
		// thumb.setAttribute("alt","eventName Thumbnail");
		// thumb.addEventListener('load',function(){ //attach thumbnail image
		//     var parentAnchor = document.getElementById( ["thumb-link-",eventId].join('') );
		//     var childImg = parentAnchor.children[0];
		//     parentAnchor.replaceChild(this,childImg);
		// });
		// thumb.addEventListener('error',function(e){
		// 	e.stopPropagation();
		// 	e.preventDefault();
		// },true);
	}

	/**
	  * Hide the ticket button in the number of hour before the event time. time (hours)
	  * 
	  * @param {String} hourOffSet - the number of hours offset from the event date time, this
	  * 							 is to set the cut off time
	  */
	public.hideTicketBtnIn = function(event,hourOffSet) {
		console.log("gfgfgfgfc");
	}

	return public;
})();

// var test_date_object = new Date();
// console.log( test_date_object.getTime()/1000 );