/*
* This scripts enable the class 'ha-custom-login' which adds an eventlistener to redirect user to the login page with a redirect url
* To use - simply add the ha-custom-login class to a login link on the page.
*/
(function($, window) {
	$( document ).ready(function() {
		var currentUrl = encodeURI( window.location.href ),
			currentOrigin = window.location.origin,
			loginUrl = '/wp-login.php';

	    $('.ha-custom-login').click(function(e) {
			e.preventDefault();
			window.location = [currentOrigin, loginUrl, '?redirect_to=', currentUrl, '&reauth=1'].join('');
		});
	});
})(jQuery, window);