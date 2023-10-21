# Remote image
FROM node:18-alpine

# Working environment within Docker
WORKDIR /src/app

# Copying dependencies
COPY package*.json ./

RUN yarn install

# Copy all files to docker from api 
COPY . .

# Run This Port
EXPOSE 3000

# Running command
CMD [ "node", "dist/src/index.js" ]