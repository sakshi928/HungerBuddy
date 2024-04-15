FROM node:20

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3030

CMD ["npm", "start"]

