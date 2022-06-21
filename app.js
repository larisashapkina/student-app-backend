//import code for express
const express = require('express');

//initialize app
const app = express();

const studentsController = require('./controllers/studentsController');

//we are going to tell app, hey whatever you get from students path, 
//use the students controller
app.use('/students', studentsController);

//route
app.get('/', (req, res)=>{
    res.send("Hello world!");
})

app.get('/')


//export app
module.exports=app;