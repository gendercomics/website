# base
ARG NODE_VERSION=18.20.4
FROM node:${NODE_VERSION}-slim AS base

#build
FROM base AS build
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run generate-website

# run
FROM nginx:stable-alpine
WORKDIR /app

COPY --from=build /app/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
