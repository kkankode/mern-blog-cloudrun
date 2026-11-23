# Stage 1: Build Vite static bundle
FROM node:22-alpine AS builder

WORKDIR /app

ARG VITE_BACKEND_URL=http://localhost:3000/api/v1
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve static bundle with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]