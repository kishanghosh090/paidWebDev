FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
# COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]
