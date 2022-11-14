FROM ubuntu
RUN apt update -y && apt install apache2 -y
RUN echo "Hello MAALSI22-LILLE" > /var/www/html/index.html
CMD apachectl -D FOREGROUND
