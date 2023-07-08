server {
    listen ${LISTEN_PORT} ssl;
    listen 80;
    server_name starpenzu.tech www.starpenzu.com;

    ssl_certificate /etc/nginx/cert.pem;
    ssl_certificate_key /etc/nginx/privkey.pem;

    location /assets {
        alias /vol/static;
    }

    location /api {
        uwsgi_pass ${APP_HOST}:${APP_PORT};
        include /etc/nginx/uwsgi_params;
        client_max_body_size 10M;
    }

    location / {
        proxy_pass http://frontend:${FRONTEND_PORT};
    }
}

