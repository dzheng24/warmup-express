const express = require('express');
const app = express();

console.log(__dirname);

app.use('/', express.static(`${__dirname}/../public/`));

app.get('/', (request, response) => {
  response.send('<h1>Welcome to My Warmup</h1>')
})


module.exports = {
  app
}