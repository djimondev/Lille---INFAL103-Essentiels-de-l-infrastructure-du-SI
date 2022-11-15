# Pipeline

## First implementation

See our implementation [here](https://gitlab.com/neodigit/maalsi-lille/ubereat)

## Runner setup with docker

```bash

docker run -d --name gitlab-runner --restart always -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest

docker exec -ti gitlab-runner gitlab-runner register

```
