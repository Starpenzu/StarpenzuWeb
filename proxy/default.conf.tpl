server {
    listen ${LISTEN_PORT};
    server_name 18.194.84.190;

    location /static {
        alias /vol/static;
    }

    location /api {
        uwsgi_pass                  ${APP_HOST}:${APP_PORT};
        include                     /etc/nginx/uwsgi_params;
        client_max_body_size 10M;
    }

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
