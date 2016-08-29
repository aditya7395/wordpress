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

