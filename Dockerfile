FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY config.conf /etc/nginx/conf.d/default.conf
