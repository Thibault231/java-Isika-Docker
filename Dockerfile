# docker build -t tdDockerNode .
# Lancer avec : docker run -d -p8080:8080 tdDockerNode

FROM node:21-alpine

WORKDIR /

COPY . .


RUN npm install
RUN npm install -g  typescript
RUN tsc


CMD ["npm", "start"]
