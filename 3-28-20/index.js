const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const app = express();
const router = require('./routes/api/members');



// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// HomePage Route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Member App'
  });
})

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))




// Members API Routes 
app.use('/api/members', (router))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));