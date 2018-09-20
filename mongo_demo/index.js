const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./model/employee.js');
const app = express();
//var bodyParser = require('body-parser');
app.use(express.json());
//app.use(bodyParser.urlencoded({extended : true}));
//app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/playground",function(){
    console.log("mongoose connection established....");
})
var employeeDetails;
app.get('/api/employees',(req,res)=>{
  Employee.find({},(err,employees)=>{
      if(err){
          console.log(err);
      }
      res.json(employees);
  })
});
app.post('/api/employees',(req,res) => {
    console.log("request parameters :",req.body)
    Employee.create(req.body,(err,employee)=>{
        if(err){
            console.log("error :",err);
        }
       res.json({message : 'Data Saved'})
    })
});
app.put('/api/employees/:id',(req,res)=>{
   Employee.update({empId:req.params.id},req.body,(err,employees)=>{
    if(err){
        console.log(err);
    }
    res.json(employees);
   })
});

app.delete('/api/employees/:id',(req,res)=>{
    Employee.remove({empId:req.params.id},(err,employees)=>{     
            if(err){
                console.log(err);
            }
            res.json(employees);
    })
});
const port = process.env.PORT || 3000 ;
app.listen(port,console.log(`Listening to ${port}.....`));