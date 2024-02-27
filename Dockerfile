FROM node:18-alpine

WORKDIR /app/pradip/cocktail

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm" , "run", "dev"]