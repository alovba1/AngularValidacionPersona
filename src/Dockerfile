FROM node:19-alpine3.15
WORKDIR /ejemplo1
COPY . .
RUN yarn install --production
CMD ["node","/ejemplo1/src/index.html"]