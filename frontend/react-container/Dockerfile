FROM node:alpine3.20

WORKDIR /react-container/

COPY public/ /react-container/public
COPY src/ /react-container/src
COPY package.json /react-container/

EXPOSE 3000

RUN npm install 

CMD [ "npm","start" ]

