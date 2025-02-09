FROM node:14-alpine

WORKDIR /CTF-HACK

COPY source/package.json source/package-lock.json ./

# only necessary dependencies are installed
RUN npm install --only=production

COPY source/ .

# The port
EXPOSE 3000

CMD ["npm", "start"]
