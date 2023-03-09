FROM node:16-alpine as build-stage

WORKDIR /app
COPY . .

RUN npm ci 
RUN npm run build


FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/build/favicon.ico /usr/share/nginx/html/static/favicon.ico
COPY --from=build-stage /app/build/resume.pdf /usr/share/nginx/html/static/resume.pdf
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf