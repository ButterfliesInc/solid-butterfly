#!/bin/bash
apt update
apt install nodejs
npm install -g npm@latest
apt update
npm install pm2 -g
pm2 completion install
npm install pm2 -g && pm2 update
git clone .....
cd solidbutterfly
npm i
npm run build
pm2 start npm --name solidbutterfly -- run start -- -p 3000