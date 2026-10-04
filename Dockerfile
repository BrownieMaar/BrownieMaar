# syntax=docker.io/docker/dockerfile:1

# Step 1. Build the static site
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY app ./app
COPY public ./public
COPY components ./components
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY next.config.ts .
COPY postcss.config.mjs .

RUN npm run build

# Step 2. Serve the static files with nginx
# Listens on 3700 (not 80) so the compose file on the VPS keeps its
# 3700:3700 mapping and the deploy pipeline needs no manual steps.
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 3700
