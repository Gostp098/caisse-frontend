# Stage 1: Install dependencies
FROM node:18-alpine AS installer

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# Stage 2: Build the Angular application
FROM node:18-alpine AS builder

WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN npm rebuild esbuild --platform=linux --arch=x64  # Ensure esbuild is built for Linux
RUN npm run build --omit=dev

# Stage 3: Copy minimized files to Nginx image (final image)
FROM nginx:alpine

COPY --from=builder /app/dist/caisse-frontend /usr/share/nginx/html
EXPOSE 80
