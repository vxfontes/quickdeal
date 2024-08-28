FROM node:18 AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start:dev"]