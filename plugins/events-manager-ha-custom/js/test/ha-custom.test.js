var assert = chai.assert;
/* var jsdom = require('jsdom').jsdom,
    doc = jsdom(),
    window = doc.defaultView,
    jQuery = require('jquery')(window),
    expect = require('chai').expect;
    ha_custom = require(__dirname + '/../ha-custom.js')(jQuery);
*/
describe('ha_custom', function() {
	describe('generateTicketBtn', function() {
		var ovationtixAttrName = "Ovationtix Link";

		it('should return error when given bad attr_name', function(){
			var data = {
				attr_name: "bad attr",
				ticketLink: "Default ticket link",
				btnImgLink: "Default btn image link"
			};
			var res = EMHaCustom.generateTicketBtn(data);
			assert.isNotOk(res, 'Bad attr');
		});
		
		it('should return error when given empty ticket link', function(){
			var data = {
				attr_name: ovationtixAttrName,
				ticketLink: "",
				btnImgLink: "Default btn image link"
			};
			var res = EMHaCustom.generateTicketBtn(data);
			assert.isNotOk(res, 'empty ticket link');
		});
		
		describe('Ovationtix Link Attribute', function() {

			it('should return error when given empty button image link', function(){
				var data = {
					attr_name: ovationtixAttrName,
					ticketLink: "Default ticket link",
					btnImgLink: ""
				};
				var res = EMHaCustom.generateTicketBtn(data);
				assert.isNotOk(res, 'empty button image link');
			});

			it('should return html that matches template', function(){
				var data = {
					attr_name: ovationtixAttrName,
					ticketLink: "Default ticket link",
					btnImgLink: "Default btn image link"
				};
				var res = EMHaCustom.generateTicketBtn(data);
				assert.equal(res.outerHTML, '<a href="Default ticket link"><img src="Default btn image link" alt="Buy Ticket"></a>');
			});
		});
		//youtubeLink Test
        describe('Youtube Link Attribute', function() {
			var youtubeLinkAttrName = "Youtube Link";

			it('should return youtube link that matches template', function(){
				var data = {
					attr_name: youtubeLinkAttrName,
					youtubeLink: 'https://www.youtube.com/watch?v=_pwdixReIZ4'
				};
				
				var res = EMHaCustom.generateYoutubeLink(data);
				assert.equal(res.outerHTML, '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe class="youtubeLink" width="500" rameborder="0" src="https://www.youtube.com/embed/_pwdixReIZ4"></iframe></div>');
			});
			it('should return false if no youtube link found',function(){
                   var data = {
					attr_name: youtubeLinkAttrName,
					youtubeLink: ''
				};
				var res = EMHaCustom.generateYoutubeLink(data);
				assert.isNotOk(res, 'empty youtube link');
				});

			/*describe('options.attr_name', function() {
				it("should default to false when youtubeLink is not present", function() {
					var data = {
						attr_name: youtubeLinkAttrName,
						youtubeLink: "ERROR: Undefined youtubeLink"
					}
					var res = EMHaCustom.generateYoutubeLink(data);
					assert.equal(res.outerHTML, '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe class="youtubeLink" width="500"  rameborder="0" src=\'' + options.youtubeLink + '\'>'+					 
				'</iframe></div>)');
				});
				<div style="position:relative;height:0;padding-bottom:56.25%"><iframe class="youtubeLink" width="500" rameborder="0" src="http://www.messichaib.com"></iframe></div>
				<div style="position:relative;height:0;padding-bottom:56.25%"><iframe class="youtubeLink" width="500" rameborder="0" src="http://www.messichaib.com"></iframe></div>
				
			});*/
		});

		
		describe('Ticket Link Attribute', function() {
			var ticketLinkAttrName = "Ticket Link";

			it('should return html that matches template', function(){
				var data = {
					attr_name: ticketLinkAttrName,
					ticketLink: "Default ticket link"
				};
				var res = EMHaCustom.generateTicketBtn(data);
				assert.equal(res.outerHTML, '<a href="Default ticket link"><button>Buy Ticket</button></a>');
			});

			describe('options.btnName', function() {
				it("should default to 'Buy Ticket' when btnName is undefined", function() {
					var data = {
						attr_name: ticketLinkAttrName,
						ticketLink: "Default"
					}
					var res = EMHaCustom.generateTicketBtn(data);
					assert.equal(res.outerHTML, '<a href="Default"><button>Buy Ticket</button></a>');
				});
				it("should show the text in btnName when it is defined", function() {
					var data = {
						attr_name: ticketLinkAttrName,
						ticketLink: "Default",
						btnName: "Extra Ticket"
					}
					var res = EMHaCustom.generateTicketBtn(data);
					assert.equal(res.outerHTML, '<a href="Default"><button>Extra Ticket</button></a>');
				});

			});
		});

	});
});	

