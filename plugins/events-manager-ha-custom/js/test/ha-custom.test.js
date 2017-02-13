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

