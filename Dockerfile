# docker build -t tdDockerNode .
# Lancer avec : docker run -d -p8080:8080 tdDockerNode

FROM node:21-alpine

WORKDIR /

COPY . .


RUN npm install
RUN npm install -g  typescript
RUN tsc

COPY style.css dist/
COPY Nunito-Regular.ttf dist/
COPY app.js dist/
COPY app.html dist/


CMD ["npm", "start"]
