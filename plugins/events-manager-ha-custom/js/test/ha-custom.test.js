var assert = chai.assert;
var expect = chai.expect;

/* var jsdom = require('jsdom').jsdom,
    doc = jsdom(),
    window = doc.defaultView,
    jQuery = require('jquery')(window),
    expect = require('chai').expect;
    ha_custom = require(__dirname + '/../ha-custom.js')(jQuery);
*/
describe('ha_custom', function() {
	describe('EMHaCustom.generateTicketBtn()', function() {
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

	describe('EMHaCustom.generateYoutubeLink()' , function() {
		//youtubeLink Test
		var youtubeLinkAttrName = "Youtube Link";

		it('should return youtube link that matches template', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: 'https://www.youtube.com/watch?v=_pwdixReIZ4'
			};
			
			var res = EMHaCustom.generateYoutubeLink(data);
			assert.equal(res.outerHTML, '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/_pwdixReIZ4" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen=""></iframe></div>');
		});
		it('should return false if no youtube link found',function(){
               var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: ''
			};

			var res = EMHaCustom.generateYoutubeLink(data);
			assert.isNotOk(res, 'empty youtube link');
		});	
	});

	describe('EMHaCustom.generateEntryContentLeft()', function() {

		//generateEntryContentLeft: youtubeLink has to be chosen over images links
		var youtubeLinkAttrName = "Youtube Link";
		var youtubeLink = 'https://www.youtube.com/watch?v=_pwdixReIZ4';
		var featuredImage = 'http://events.ha.sjsu.edu/art/wp-content/uploads/sites/3/2017/02/Joel-Slayton-1.jpg';
		var categoryImage = 'http://events.ha.sjsu.edu/art/wp-content/uploads/sites/3/2017/02/Sergei-Isupov.jpg';
		var defaultImage = 'http://events.ha.sjsu.edu/art/wp-content/uploads/sites/3/2017/02/12_Bean-Finneran-01-1.jpg';

		//generateEntryContentLeft: defaultImage link has to be chosen by default and an exception should be thrown for not having any youtube/image link set
		it('should throw and error for not providing any youtube or image link including default link', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: "" ,
				featuredImageLink: "",
                categoryImageLink: "",
                defaultImageLink: ""
				
			};
            expect(EMHaCustom.generateEntryContentLeft.bind(this, data)).to.throw(Error); 
		});

		it('should display the youtube video when provided with all youtubeLink, featuredImage, categoryImage, defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: youtubeLink,
				featuredImageLink: featuredImage,
                categoryImageLink: categoryImage,
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+youtubeLink+'">');
		});
			

		//generateEntryContentLeft: featuredImagelink has to be chosen over other links
		it('should display the featured image when provided with only featuredImage, categoryImage, defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: "" ,
				featuredImageLink: featuredImage,
                categoryImageLink: categoryImage,
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+featuredImage+'">');
		});

		//generateEntryContentLeft: categoryImagelink has to be chosen over other links
		it('should display the category image when provided with only categoryImage, defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: "",
				featuredImageLink: "",
                categoryImageLink: categoryImage,
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);
			assert.equal(res.outerHTML, '<img src="'+categoryImage+'">');
		});

		//generateEntryContentLeft: defaultImage has to be chosen over other links
		it('should display the default image when provided with only defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: "",
				featuredImageLink: "",
                categoryImageLink: "",
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+defaultImage +'">');
		});
			
		//generateEntryContentLeft: youtubeLink has to be chosen over featuredImage links
		it('should display the youtube video when provided with only youtubeLink, featuredImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: youtubeLink ,
				featuredImageLink: featuredImage,
                categoryImageLink: "",
                defaultImageLink: ""
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="' + youtubeLink + '" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen=""></iframe></div>');
		});

		//generateEntryContentLeft: youtubeLink has to be chosen over categoryImage links
		it('should display the youtube video when provided with only youtubeLink, categoryImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: youtubeLink ,
				featuredImageLink: "",
                categoryImageLink: categoryImage,
                defaultImageLink: ""
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+ youtubeLink +'">');
		});

		//generateEntryContentLeft: categoryImage link has to be chosen over default image link
		it('should display the category image when provided with only categoryImage, defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: "",
				featuredImageLink: "",
                categoryImageLink: categoryImage,
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+categoryImage+'">');
		});

		//generateEntryContentLeft: featuredImage link has to be chosen over default image link
		it('should display the featured image when provided with only featuredImage, defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: "",
				featuredImageLink: featuredImage,
                categoryImageLink: "",
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+featuredImage+'">');
		});

		//generateEntryContentLeft: youotubeLink has to be chosen over default image link

		it('should display the youtube video when provided with only youtubeLink, defaultImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink: youtubeLink ,
				featuredImageLink: "",
                categoryImageLink: "",
                defaultImageLink: defaultImage
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+youtubeLink+'">');
		});

		//generateEntryContentLeft: youotubeLink has to be chosen over featured and category link
		it('should display the youtube video when provided with only youtubeLink, featuredImage, categoryImage', function(){
			var data = {
				attr_name: youtubeLinkAttrName,
				youtubeLink:youtubeLink ,
				featuredImageLink: featuredImage,
                categoryImageLink: categoryImage,
                defaultImageLink: ""
				
			};
			var res = EMHaCustom.generateEntryContentLeft(data);

			assert.equal(res.outerHTML, '<img src="'+youtubeLink+'">');
		});
	});
});	

