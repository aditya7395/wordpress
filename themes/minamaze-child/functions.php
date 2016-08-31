<?php
	function theme_enqueue_custom_style() {
	    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	}
	add_action( 'wp_enqueue_scripts', 'theme_enqueue_custom_style' );

	// Custom Function to Include
	function ha_custom_javascripts() {
		echo '<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">';
		echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.10/clipboard.min.js"></script>';
	    echo '<script src="' . get_stylesheet_directory_uri() . '/js/ha-custom.js"></script>' . "\n";
	}
	add_action( 'wp_head', 'ha_custom_javascripts' );
?>