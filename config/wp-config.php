<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'mysql');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'qXD~{vRLNbtAU-~,w@8@q![}qME3|>>9SP@mU]G-8#uw_9WU?6i7T[s>rsd*NF:-');
define('SECURE_AUTH_KEY',  'F3/EIAF]MkZ:1W(>|cpuK`AdGb|&415+YO_LY7T.P8ZH=P`o%;<wFj;n2}N}H M+');
define('LOGGED_IN_KEY',    '.Mnsd1TEs-=Dz|32MR5,C$]ZBm6;Dy4x3toL]&}a T02|]gz(A g]{n#tLtDetk8');
define('NONCE_KEY',        'L@nI]V/s.)vj|0cBhJe.^[WUL0;?m|wvR1r/*A .+~XQ(9nNLqsLySL<55*,4?H!');
define('AUTH_SALT',        'S}|*?wv$u%.r$I8Fd%VZ}y>Bt(nL$nJg~|WGU`bUe2i=1r`q#T7`Vg.-fo6h@uQP');
define('SECURE_AUTH_SALT', '$s[~F@a9);]5+5exH%3Tk`Ffb+uO@_N|qVhPrkXlmD7:*B+<e,)ckA?IY7wWc%LT');
define('LOGGED_IN_SALT',   '(06)hMPifJUET&B#bxqt/1q58ID-MMUgi58AX:W!q!Y>.K3h:3></gEnO2WQ]X_h');
define('NONCE_SALT',       'I]F3:i1D1&k~u81PqI{Vv*mh5_6E]UXY#]DtSp9HLVo!?gC/[e-*=xpVF$+pOe;q');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);


// If we're behind a proxy server and using HTTPS, we need to alert Wordpress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}


define('WP_ALLOW_MULTISITE', true);
/* That's all, stop editing! Happy blogging. */

define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false);
define('DOMAIN_CURRENT_SITE', 'localhost');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/** Sets auto updating */
define('FS_METHOD','direct');
