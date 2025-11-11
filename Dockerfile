# base
ARG NODE_VERSION=22.21.1
FROM node:${NODE_VERSION}-slim AS base

#build
FROM base AS build
WORKDIR /app

COPY package.json ./
# Use pnpm via corepack for faster, reliable installs
RUN corepack enable && corepack use pnpm@10.21.0 && pnpm install --no-frozen-lockfile
COPY . .

RUN npm run generate-website
# Add verification
RUN ls -la .output/public || exit 1

# run
FROM nginx:stable-alpine
WORKDIR /app

COPY --from=build /app/.output/public /usr/share/nginx/html
# Add verification
RUN ls -la /usr/share/nginx/html || exit 1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
