FROM wusuopu/librsvg:2.42.3-alpine

RUN apk add --no-cache udev ttf-freefont nodejs
RUN npm install -g yarn && rm -rf /root/.npm

COPY ./rootfs/app/package.json /app/
RUN cd /app && yarn install && rm -rf /root/.cache /root/.npm

COPY ./rootfs /

#config
WORKDIR /app
EXPOSE 80


CMD ["yarn", "start"]
