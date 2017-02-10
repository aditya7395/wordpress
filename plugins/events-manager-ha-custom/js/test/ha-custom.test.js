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
		var defaultAttrName = "Ovationtix Link";
		it('should return html that matches template', function(){
			var data = {
				attr_name: defaultAttrName,
				ticketLink: "Default ticket link",
				btnImgLink: "Default btn image link"
			};
			var res = EMHaCustom.generateTicketBtn(data);
			assert.equal(res.outerHTML, '<a href="Default ticket link"><img src="Default btn image link" alt="Buy Ticket"></a>');
		});

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
				attr_name: defaultAttrName,
				ticketLink: "",
				btnImgLink: "Default btn image link"
			};
			var res = EMHaCustom.generateTicketBtn(data);
			assert.isNotOk(res, 'empty ticket link');
		});
		it('should return error when given empty button image link', function(){
			var data = {
				attr_name: defaultAttrName,
				ticketLink: "Default ticket link",
				btnImgLink: ""
			};
			var res = EMHaCustom.generateTicketBtn(data);
			assert.isNotOk(res, 'empty button image link');
		});


	});
});	

