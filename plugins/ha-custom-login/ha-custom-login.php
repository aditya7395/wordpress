<?php
/*
Plugin Name: HA Custom Login
Version: v1.0
Author: Duy Nguyen
Description: This plugin handles redirecting user to page where they came from when they click login

/*
* Init custom code
*/
function init_ha_custom_login() {
	wp_enqueue_script('ha_custom_login', plugin_dir_url(__FILE__) . 'js/ha-custom-login.js', array('jquery'));
}
add_action( 'wp_enqueue_scripts', 'init_ha_custom_login', 1 );