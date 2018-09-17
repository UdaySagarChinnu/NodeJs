const express=require('express');
const router = express.Router();
const Joi = require('joi');
var movieList = [{id:1,name:"Gost"},
    {id:2,name:"Comedy"},
    {id:3,name:"Thriller"},
    {id:4,name:"Storied"},
    {id:5,name:"Sporty"},
    {id:6,name:"Kids"}];

router.get('/',(req,res)=>{
       
    res.send(movieList);
})
router.get('/:id', (req,res) => {

var movie = movieList.find(m => m.id == parseInt(req.params.id));
if (!movie) return res.status(404).send('Error no movie with given id');

res.send(movie);

});

router.post('/',(req,res) => {

var result = validates(req.body.name);
if (result.error) return res.status(404).send(result.error.details[0].message);

const movies = {
    id: movieList.length + 1,
    name: req.body.name
};
 movieList.push(movies);
res.send(movieList);
});

router.put('/:id',(req,res) => {

var result = validates(req.body.name);
if(result.error){
    return res.status(404).send(result.error);
}
var movi = movieList.find(m=> m.id == parseInt(req.params.id));
if(!movi) return res.status(404).send('Movie not found');
movi.name=req.body.name;
res.send(movi);

});

router.delete('/:id',(req,res)=> {

var movie = movieList.find(m=> m.id == parseInt(req.params.id));
var index = movieList.indexOf(movie);
movieList.splice(index,1);
res.send(movieList);

})

function validates(name){
var schema = Joi.string().min(3).required();
var result = Joi.validate(name,schema);
return result;
}

module.exports=router;