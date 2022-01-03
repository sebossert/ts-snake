FROM node:alpine

ARG port=80
ENV PORT $port
EXPOSE ${PORT}

WORKDIR /usr/app

COPY src ./src
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

RUN npm run build

CMD ["npm", "run-script", "serve"]