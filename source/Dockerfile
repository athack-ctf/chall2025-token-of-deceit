FROM node:14-alpine

WORKDIR /CTF-HACK

COPY package.json package-lock.json ./

# only necessary dependencies are installed
RUN npm install --only=production

COPY . .

# The port
EXPOSE 3000

CMD ["npm", "start"]
