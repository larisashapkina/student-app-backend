//import code for express
const express = require('express');
const cors = require('cors');

//initialize app
const app = express();

const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController');

//we are going to tell app, hey whatever you get from students path, 
//use the students controller
app.use(cors());
app.use('/students', studentsController);
app.use('/names',namesController);

//route
app.get('/', (req, res)=>{
    res.send("Hello world!");
})

app.get('/')


//export app
module.exports=app;