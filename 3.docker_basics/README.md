# Docker basics

## Installation

Follow this link to install [docker desktop](https://www.docker.com/products/docker-desktop/)

## Find images

Go to the [docker hub](https://hub.docker.com/)

## Some commands

```bash
docker --version
docker ps # List containers running on our machine
docker ps -a # List all containers on our machine
docker ps -q # List container ids running on our machine
docker stop $(docker ps -q) # Stop all running containers
watch -n 1 docker ps # refresh List of running containers every seconds
```
