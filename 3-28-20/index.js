const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();
const router = require('./routes/api/members');



// Init middleware
// app.use(logger);


// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', (router))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));