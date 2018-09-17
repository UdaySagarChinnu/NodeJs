const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

var cources = [ {id:1,name:'Course1'},
                  {id:2,name:'Course2'},
                  {id:3,name:'Course3'}];
app.get('/',(req,res)=>{

    res.send("Hello--world");

});

// app.get('/api/cources',(req,res)=>{

//     res.send(['u','d','a','y']);
// });

app.get('/api/cources/:id',(req,res)=>{
    let cource = cources.find(c => c.id === parseInt(req.params.id));
    if(!cource){
        res.status(404).send(`Error 404 cource with id not avaliable`)
    }
    res.send(cource);
    
});

app.post('/api/cources',(req,res)=>{
const schema = Joi.string().min(3).required();

const result=Joi.validate(req.body.name,schema);
if(result.error)
{
    res.status(400).send(result.error.details[0].message);
    return;
}
// validating
// if(!req.body.name || req.body.name.length < 4)
// {
//     res.status(400).send('Error name must be need and it should be more than 3 char');
//     return;
// }

    const cource = {
        id:cources.length+1,
        name:req.body.name
    }
    cources = cources.push(cource);
    res.send(cource);
})

app.put('/api/cources/:id',(req,res)=>{
  
    var course = cources.find(c=>c.id == parseInt(req.params.id));

    if(!course){
        res.status(404).send('Error cource with id do not exit');
    }
        var result = validate(req.body.name);
   
    if(result.error){
        res.status(404).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
  
});

app.delete('/api/cources/:id',(req,res)=>{
   // var cource = cources.find(c=> c.id == parseInt(req.params.id));
  
    var course = cources.find(c=> c.id == parseInt(req.params.id));
    var index = cources.indexOf(course);
    cources.splice(index,1);
    res.send(course);
    
})

function validate(name){
    var schema = Joi.string().min(3).required();
    var result = Joi.validate(name,schema);
    return result;
}

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Listening to ${port}......`)});