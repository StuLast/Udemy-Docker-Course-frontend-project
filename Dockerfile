FROM node:alpine as builder

  WORKDIR '/app'

  RUN npm install yarn -g
  COPY ./package.json ./
  RUN yarn install

  COPY . .
  RUN yarn run build

FROM nginx
COPY --from=builder /build /usr/share/nginx/html 

