server {
    listen ${LISTEN_PORT};
    server_name 3.66.220.224;

    location /static {
        alias /vol/static;
    }

    root /home/ubuntu/StarpenzuWeb/frontend/build;
    index index.html;

    location /api {
        uwsgi_pass                  ${APP_HOST}:${APP_PORT};
        include                     /etc/nginx/uwsgi_params;
        client_max_body_size 10M;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
