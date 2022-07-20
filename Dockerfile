FROM node

COPY . /netstats-server
WORKDIR /netstats-server
RUN npm install
RUN npm install -g grunt-cli
RUN grunt

EXPOSE  3000
CMD ["npm", "start"]
