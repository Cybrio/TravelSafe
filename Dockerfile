# Dockerfile for the backend
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY backend/package*.json ./
RUN npm install

# Bundle app source
COPY backend .

EXPOSE 5000
CMD [ "node", "index.js" ]