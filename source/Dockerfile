FROM node:14-alpine

RUN adduser -D -h /home/chall chall

WORKDIR /home/chall/

COPY chall .

RUN chown -R chall:chall /home/chall/

USER chall

RUN npm install --only=production

EXPOSE 2025

CMD ["npm", "start"]
