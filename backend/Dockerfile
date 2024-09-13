# Stage 1
FROM node:16 as build

WORKDIR /app

COPY package.json .

RUN npm install

# Stage 2
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules

COPY . .

EXPOSE ${PORT}

CMD ["node","server.js"]



