FROM node:19-alpine
ENV NODE_ENV=production
COPY package*.json .
RUN npm ci
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
