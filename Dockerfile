# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run generate

# production environment
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
