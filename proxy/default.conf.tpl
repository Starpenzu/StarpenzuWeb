server {
    listen ${LISTEN_PORT} ssl;
    server_name starpenzu.tech www.starpenzu.com;

    ssl_certificate /etc/nginx/cert.pem;
    ssl_certificate_key /etc/nginx/privkey.pem;

    location /static {
        alias /vol/static;
    }

    location /api {
        uwsgi_pass ${APP_PORT}:${APP_PORT};
        include /etc/nginx/uwsgi_params;
        client_max_body_size 10M;
    }

    location / {
        proxy_pass http://172.31.42.209:${FRONTEND_PORT};
    }
}

