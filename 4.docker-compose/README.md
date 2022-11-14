# docker-compose

## Installation

Follow this [link](https://docs.docker.com/compose/install/)

## Commands

```bash
docker-compose --version
docker-compose ps # To see containers running inside a stack
docker-compose up # To start container stack
docker-compose up -d # To start container stack in deamon mode
docker-compose down # To stop container stack
docker-compose logs -f # To see all logs for all services
docker-compose logs -f www1 # To see all logs for www1 service
docker network create lille
docker network inspect lille
```
