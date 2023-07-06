server {
    listen ${LISTEN_PORT} ssl;
    server_name starpenzu.tech www.starpenzu.com;

    ssl_certificate /etc/nginx/cert.pem;
    ssl_certificate_key /etc/nginx/privkey.pem;

    location /static_ {
        alias /vol/static;
    }

    location /api {
        uwsgi_pass ${APP_HOST}:${APP_PORT};
        include /etc/nginx/uwsgi_params;
        client_max_body_size 10M;
    }

    location / {
        root /var/www/react;
    }
}

