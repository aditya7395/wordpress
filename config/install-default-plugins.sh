#!/bin/bash

# Installing wp-cli
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
php wp-cli.phar --info --allow-root
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp

# Installing default plugins
wp plugin install akismet --activate --allow-root
wp plugin install capability-manager-enhanced --activate --allow-root
wp plugin install css-javascript-toolbox --activate --allow-root
wp plugin install event-manager --activate --allow-root
wp plugin install event-manager-time-clash --activate --allow-root
wp plugin install wp-fullcalendar --activate --allow-root


# Install default production only plugins
wp plugin install google-analytics-dashboard-for-wp --allow-root
wp plugin install updraftplus --allow-root
wp plugin install wp-smushit --allow-root
wp plugin install google-sitemap-generator --allow-root