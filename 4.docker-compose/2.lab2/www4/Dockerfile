FROM ubuntu
RUN apt update -y && apt install apache2 -y
RUN echo "www4" > /var/www/html/index.html
CMD apachectl -D FOREGROUND