# Docker advanced

## Introduction

In this part we will talk about networks and how to make containers communicate between themselves.

1. We assume that docker (as `docker run ...`) uses the default network mode: bridge
2. We assume that docker-compose (as `docker-compose up`) uses a network in bridge mode, but dedicated to its own stack.
3. In addition to those points, containers cannot communicate between themselves if they don't use the same mode or the same network.

To use a Dedicated network

commands:

```bash
docker network create [name]
docker run -d -p 8005:80 --network [network_name] --name [container_name] php:8.2.0RC6-apache-buster
```

docker-compose.yml

```yml
version: "3"
services:
  www1:
    container_name: www1
    image: httpd
  www2:
    container_name: www2
    image: caddy
  www3:
    container_name: www3
    image: nginx
networks:
  default:
    external:
      name: [network_name]
```
