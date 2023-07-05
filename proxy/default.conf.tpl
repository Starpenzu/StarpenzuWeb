server {
    listen ${LISTEN_PORT};
    server_name starpenzu.tech;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name starpenzu.tech;

    ssl_certificate /cert.pem;
    ssl_certificate_key /privkey.pem;

    location /static {
        alias /vol/static;
    }

    location /api {
        uwsgi_pass                  ${APP_HOST}:${APP_PORT};
        include                     /etc/nginx/uwsgi_params;
        client_max_body_size 10M;
    }

    location / {
        proxy_pass https://172.31.42.209:${FRONTEND_PORT};
    }
}
