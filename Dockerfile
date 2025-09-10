FROM klakegg/hugo:0.111.2-alpine-ci AS blog_build
WORKDIR /src
COPY blog/ /src/
ARG BLOG_BASEURL=https://blog.neme.site/
RUN hugo --minify --baseURL="${BLOG_BASEURL}"

FROM node:24-alpine AS web_build
WORKDIR /app
COPY website/package*.json ./
RUN npm ci
COPY website/ .
RUN npm run build

FROM nginx:1.29.0-alpine AS runtime
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=web_build  /app/dist   /srv/website
COPY --from=blog_build /src/public /srv/blog

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
