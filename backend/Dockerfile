FROM node:16

WORKDIR /usr/src/backend

COPY package*.json ./

COPY . .

RUN npm install -g npm@9.2.0

RUN npm i

RUN npx sequelize-cli db:create

RUN npx sequelize-cli db:migrate

RUN npx sequelize-cli db:seed:all

COPY . .

EXPOSE 3001

CMD ["npm", "start"]