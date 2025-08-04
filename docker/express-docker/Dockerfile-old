#use an official image of Node.js runtime
FROM node:22-alpine

# set working dir
WORKDIR /app

COPY package*.json ./

#install dependencies
RUN npm install

COPY . .
ENV PORT=3000

CMD [ "npm","run","start" ]
