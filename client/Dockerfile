FROM node:19-alpine
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci
RUN npm install -g serve
COPY . .
ARG REACT_APP_API_URL
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
