FROM node:12-alpine

RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN yarn
CMD ["node", "app.js"]