# build stage
FROM node:lts-alpine3.14 as build-stage
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run generate-website

# production environment
FROM nginx:stable-alpine
COPY --from=build-stage /app/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
