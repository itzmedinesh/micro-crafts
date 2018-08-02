FROM node:alpine

RUN apk add --no-cache libc6-compat

RUN npm install babel-cli@6.26.0 -g --save

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

