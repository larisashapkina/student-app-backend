const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');

const db = require('../db/index');

controller.get('/', async (request, response) => {

    let {limit=25, min, max} = request.query; 

    limit = Number(limit);

    let studentDataForDelivery = await db.any('SELECT * FROM students');

    studentDataForDelivery = studentDataForDelivery.slice(0, limit);

    response.json(studentDataForDelivery);

});


controller.get('/:id', async (request, response) => {
    try {
        const studentId = request.params.id;
        
        if(!/[0-9]/.test(studentId)){
            response.send('Student id must be a number.')
            return;
        }
        
        const singleStudent = await db.oneOrNone('SELECT * FROM students WHERE id=$1', [studentId]);
        
        if(singleStudent){
            response.json(singleStudent);
        } else {
            response.send('Student not found');
        }  
          
    } catch (err){
        response.status(500).send("An error occurred");
    }
})

controller.get('/:id/grades', async(req, res)=>{
try{
    const studentId = req.params.id;

    const grades = await db.any('SELECT * FROM grades WHERE student_id = $1', [studentId]);

    grades.sort((a,b) => a.date - b.date);


    res.json(grades);
    }   catch(err) {
        res.status(500).send(err);
    }   
})

module.exports = controller;