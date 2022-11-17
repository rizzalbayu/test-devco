from node:12-alpine

workdir /app
copy package*json . 

run npm install
copy . .
expose 3030

cmd ["npm", "run", "start"]