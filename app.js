//import code for express
const express = require('express');

//initialize app
const app = express();

//route
app.get('/', (req, res)=>{
    res.send("Hello world!");
})

//export app
module.exports=app;