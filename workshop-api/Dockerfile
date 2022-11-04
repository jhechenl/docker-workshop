FROM node:12

RUN mkdir -p /home/node/app

WORKDIR /home/node/app
COPY package*.json ./

RUN npm install

COPY . /home/node/app
RUN npm run build

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "dist/main.js"]