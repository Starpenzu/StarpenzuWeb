FROM node:18-alpine as frontend-builder

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install react@18.2.0 --force
RUN npm install --force
COPY . .

# Build frontend React app
RUN npm run build

# Copy the frontend.sh script to the container
COPY frontend.sh /frontend.sh

# Set execute permissions for the script
RUN chmod +x /frontend.sh

EXPOSE 3000

CMD ["/frontend.sh"]
