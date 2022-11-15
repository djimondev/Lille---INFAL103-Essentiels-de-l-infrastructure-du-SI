# REVERSE PROXY DOCKER

## Commands

```bash
docker network create good-food # We create our network

# Please keep in mind to populate your Caddyfile
# ubereat-lille.neodigit.fr {
#         root * /usr/share/caddy
#         file_server
# }

docker run --rm -d  -p 80:80 -p 443:443 -v /home/jimmylefevre/reverse/caddy/:/etc/caddy --network good-food --name reverse caddy # We start caddy as reverse proxy

# If you want to add a service in Caddyfile
# https://test-lille.neodigit.fr {
# 	reverse_proxy http://nginx
# }
```
