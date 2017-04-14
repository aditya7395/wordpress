//Replacing poster with thumbnail
var EMHaCustom = (function($, window) {

    var public = {};
/*
    Generate html for detailed event and time 
     * @param {Object} options - {
     *          attr_name: 'Detailed Event Date/Time',
     *          detailed_event_date_time: '_ATT{detailed_event_date_time}'
     *         }
     * @return {HTML|false}  
    */
     public.generateDetailedEventDateTime = function(options) {
         if(options.attr_name === 'detailed_event_date_time') {
             var input = options.detailed_event_date_time;
            if(!input){
                 console.log("ERROR: Undefined Detailed Event Date/Time");
                 return false;
             }
            var template = '<strong>Date/Time</strong><br/>' + input + '<br/>'
            console.log(template);
            return template;
         } else {
             return false;
         }
    }
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

        if (!options.ticketLink) {
            console.log("ERROR: Undefined ticketLink");

            return false;
        }

        if (options.attr_name === 'Ovationtix Link') {

            if (!options.btnImgLink) {
                console.log("ERROR: Undefined btnImgLink");

                return false;
            }

            var template = '<a href=\'' + options.ticketLink + '\'>' +
                '<img src=\'' + options.btnImgLink + '\' alt="Buy Ticket"></img>' +
                '</a>';

            return $.parseHTML(template)[0];

        } else if (options.attr_name === 'Ticket Link') {

            options.btnName = options.btnName || "Buy Ticket";

            var template = '<a href=\'' + options.ticketLink + '\'>' +
                '<button>' + options.btnName + '</button>' +
                '</a>';

            return $.parseHTML(template)[0];

        } else {

            return false;
        }
    }

    /** 
     * Generate either youtube video or image for the left side of single event view 
     * @param {Object} options - {
     * 			   categoryImageLink: 'category image link',
     *             featuredImageLink: 'featured image link',
     *             youtubeLink: 'youtube link',
     *             defaultImageLink: 'link to default image'
     *         } 
     * @return {HTML|false}
     */
    public.generateEntryContentLeft = function(options) {
        var template;
        if (options.youtubeLink) {
            var linkObj = {attr_name: "Youtube Link", youtubeLink: options.youtubeLink} 
            template = this.generateYoutubeLink(linkObj);

        } else if (options.featuredImageLink) {
            template = this.generateImg(options.featuredImageLink);
        } else if (options.categoryImageLink) {
            template = this.generateImg(options.categoryImageLink);
        } else if(options.defaultImageLink){
            template = this.generateImg(options.defaultImageLink);
        } else if(options.defaultImageLink=='' && options.youtubeLink=='' && options.featuredImageLink=='' && options.categoryImageLink==''){
            throw Error("ERROR: at least one link should be provided");
        }

        return template;
    }


    /** 
     * Generate HTML
     * @param {Object} link - {
     * 			template: "image element",
     * 			
     *         } 
     * @return {HTML|false}
     */

    public.generateImg = function(link) {
        var template = '<img src=\'' + link + '\'>';
        return $.parseHTML(template)[0];
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

        if (!options.youtubeLink) {
            console.log("ERROR: Undefined youtubeLink");
            return false;
        }

        if (options.attr_name === 'Youtube Link') {
         

            var extractId = options.youtubeLink.split("v=");
            var idPos = extractId.length - 1;
            var id = extractId[idPos];
            var template = ['<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/', id, '" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>'].join('');
               

            return $.parseHTML(template)[0];
        } else {
            //console.log('ERROR: Unknown attribute name', options.attr_name);
            return false;
        }
    }

    return public;
})(jQuery, window);