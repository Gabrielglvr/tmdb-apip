FROM node:8
LABEL Gabriel Oliveira
ENV NODE_ENV=production
COPY . /var/www
WORKDIR /var/www
EXPOSE 5000
RUN npm install
RUN npm install pm2 -g
CMD ["pm2-runtime", "./src/index.js"]