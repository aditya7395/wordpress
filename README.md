# H&A Wordpress Installation Guide

### Requirement
  - Any OS that supports docker
  - Have docker installed (At least version 12, see [installation guide](https://docs.docker.com/engine/installation/)) 

### Installation
```sh
sudo mkdir /opt/
```
Make system folder, in case it doesnt exists already

```sh
sudo git clone git@bitbucket.org:ha_sjsu/wordpress.git /opt/ha
```
Cloning project to the appropriate directory

```sh
sudo chown -R `whoami` /opt/ha
```
Change ownership of project to current user

```sh
cp -a /opt/ha/assets /opt/ha/uploads
```
Copy the assets folder to a new folder called ```uploads```

By default, `/opt`  is not shared with docker. Configure the shared paths [Mac OSX] by going through Docker -> Preferences... -> File Sharing. 
See https://docs.docker.com/docker-for-mac/osxfs/#namespaces for more info.

```sh
docker run --name haMysql -v /opt/ha/db:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=root -p 9000:3306 -d mysql:5.5.51 && docker start haMysql	
```
Start the mysql container with name sceMysql. This container will be exposed at port `9000` on your system and has username: `root` with password `root`


```sh
docker run --name haWordpress --link haMysql:mysql -v /opt/ha/themes:/var/www/html/wp-content/themes -v /opt/ha/plugins:/var/www/html/wp-content/plugins -v /opt/ha/uploads:/var/www/html/wp-content/uploads -v /opt/ha/config:/var/www/html/config -v /opt/ha/config/uploads.ini:/usr/local/etc/php/conf.d/uploads.ini -e WORDPRESS_DB_NAME=wordpress -p 80:80 -d wordpress:latest && docker start haWordpress
```
Spool up the wordopress docker container. This container will be exposed at port `80` which is also your system `localhost`

```sh
docker exec -it haWordpress /bin/bash
```
Open the bash command line in the haWordpress container

```sh
./config/install-default-plugins.sh
```
Open the bash command line in the haWordpress container

```sh
cp config/htaccess .htaccess && cp config/wp-config.php wp-config.php
```
Copy htaccess to .htaccess for path rewrite

Next, you need to manually "Network Activate" any custom plugin that you want to work on in the My Sites > Network Admin > Plugins

Done!
You can now access the site at `localhost` with username `superadmin` and password `admin`. You can modify the source code in `/opt/ha` to start developing.

### Useful commands for debugging
```sh
docker logs -f your_php_apache_container >/dev/null
```
Show error logs.