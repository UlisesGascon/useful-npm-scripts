# Stage-1 dependencies
FROM node:14.15.1 as dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --only=production

# Stage-2 final image
FROM node:14.15.1-alpine
WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY package*.json ./
COPY /src ./src
EXPOSE 5000
CMD [ "npm", "start" ]