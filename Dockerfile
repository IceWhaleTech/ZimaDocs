FROM node:18

RUN npm install -g hexo-cli
WORKDIR /app

COPY . /app

RUN yarn
RUN yarn build

EXPOSE 4000

CMD ["hexo", "server"]

