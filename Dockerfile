FROM node:18-alpine

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN npm run build

EXPOSE 5173

CMD [ "npm", "run", "preview" ]
