FROM nginx:1.9.8
LABEL author="Robert Cleric"

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY ./nginx/certs /etc/nginx/ssl/
COPY ./dist /usr/share/nginx/html

EXPOSE 443

ENTRYPOINT [ "nginx", "-g daemon off;" ]
