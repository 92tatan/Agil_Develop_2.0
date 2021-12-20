FROM node:17-alpine

WORKDIR /APP

COPY . .

RUN npm install

EXPOSE 5002 

CMD ["node" , "/APP/index.js"]