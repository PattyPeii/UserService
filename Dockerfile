### STAGE 1: Build ### 
FROM node:16 AS build 
WORKDIR /srv/grpc
COPY package.json *.proto package-lock.json ./ 
RUN npm install 
COPY . .
CMD ["node", "app.js"]
EXPOSE 8001