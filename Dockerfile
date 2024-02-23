FROM node:18

WORKDIR /app-OpenBanking

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]