FROM node

RUN apt-get update

RUN npm config set unsafe-perm true

COPY ./package.json /app/package.json

WORKDIR /app

RUN npm i -g babel

RUN npm i -g webpack

RUN npm i -g webpack-cli

RUN npm i -g webpack-dev-server

RUN npm install

RUN npm rebuild node-sass

ENTRYPOINT npm run start:dev
