# Docker basics

## Installation

Follow this link to install [docker desktop](https://www.docker.com/products/docker-desktop/)

## Find images

Go to the [docker hub](https://hub.docker.com/)

## Security

By default your host machine cannot communicate with a container via http or via the filesystem.

If I want my host machine communicating via http with my container, I need to map ports by using `-p` option
Eg. `docker run -d -p 3000:80 httpd # to map 80 port of my container on 3000 of my host machine`

## Some commands

```bash
docker --version
docker ps # List containers running on our machine
docker ps -a # List all containers on our machine
docker ps -q # List container ids running on our machine
docker stop $(docker ps -q) # Stop all running containers
watch -n 1 docker ps # refresh List of running containers every seconds

docker run --rm ubuntu echo "Hello MAALSI22 Lille"
docker run --rm ubuntu sleep 10

docker run -d -p 3000:80 httpd # Container with id 2fd87aa3343e is running
docker stop 2f # Stops httpd container
docker rm 2f # Deletes httpd container


```
