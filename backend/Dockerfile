FROM node:19-alpine
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci
ENV NODE_ENV=production
COPY . .
RUN npm run build
CMD ["node", "./dist/index.js"]