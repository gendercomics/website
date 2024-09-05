# base
ARG NODE_VERSION=18.20.4
FROM node:${NODE_VERSION}-slim AS base

#build
FROM base AS build
WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .

RUN npm run build-website

# run
FROM base


COPY --from=build /app/.output /.output
EXPOSE 3000
#CMD ["nginx", "-g", "daemon off;"]
CMD ["node", ".output/server/index.mjs"]
