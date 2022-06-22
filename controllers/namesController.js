const express = require('express');
const {repeatNTimesWithSpace, capitilizeFirstLetter} = require('../utils/stringUtils');
const controller = express.Router();

controller.get('/capitilizeName/:name', (req,res)=>{
    try{
        //get name
        const  name= req.params.name;
        //get result of repeatNTimesWithSpace
        const capitilizeName = capitilizeFirstLetter(name);
        //send string response of result
        res.send(capitilizeName)
    }catch(err){
        res.send("There was an error.")
    }
})

controller.get('/:name/:times', (req,res)=>{
    try{
        //get name
        const  name= req.params.name;
        //get times
        const times = req.params.times;
        //get result of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name,times);
        //send string response of result
        res.send(repeatedNames)
    }catch(err){
        res.send("There was an error.")
    }
})



module.exports = controller;