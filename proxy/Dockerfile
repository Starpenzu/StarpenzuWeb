FROM nginxinc/nginx-unprivileged:1-alpine
LABEL maintainer="TheOptimust"

COPY /build /usr/share/nginx/html
COPY ./default.conf.tpl /etc/nginx/default.conf.tpl
COPY ./uwsgi_params /etc/nginx/uwsgi_params
COPY ./cert.pem /etc/nginx/cert.pem
COPY ./privkey.pem /etc/nginx/privkey.pem
COPY ./fullchain.pem /etc/nginx/fullchain.pem
COPY ./run.sh /run.sh

ENV LISTEN_PORT=443
ENV APP_HOST=app
ENV APP_PORT=9000
ENV FRONTEND_PORT=3000

USER root

RUN mkdir -p /vol/static && \
    chmod 755 /vol/static && \
    touch /etc/nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh


VOLUME /vol/static

USER nginx

CMD ["/run.sh"]
