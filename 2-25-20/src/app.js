const express = require('express');
const app = express();

console.log(__dirname);

// Body Parser Middleware
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// Setting up EJS 
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`)

// Routes
app.use('/', express.static(`${__dirname}/../public/`));

app.get('/', (request, response) => {
  response.send('<h1>Welcome to My Warmup</h1>')
})

app.get('*', (req, res) => {
  res.status(404);
  res.statusMessage = 'Not Found';
  res.render('not-found', {tacos:req})
})

app.post('/save', (request, response) => {
  response.send(request.body);
})

// Error handling
app.use((err, req, res, next) => {
  res.status(500);
  res.statusMessage('This is a server error');
  res.render('error', {request:req, err: err})
})


module.exports = {
  app
}