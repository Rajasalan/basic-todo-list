const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes');

//Declare app
const app =express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

// Run server
app.listen('8000', err =>{
    if(err)
    console.log(err)
    console.log('server is started at port number : 8000')
});
