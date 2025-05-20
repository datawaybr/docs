FROM node:18-bullseye

WORKDIR /workspaces/docs
COPY package.json ./

RUN yarn install
COPY . .
