
const express= require('express');
const app = express();
const movieList = require('./movies/movie');
const router = express.Router();




const mongoose=  require('mongoose');

mongoose.connect("mongodb://localhost:27017/playground",{ useNewUrlParser: true },()=>{
    console.log("MongoDB Connected Successfully....");
});

app.use(express.json());
app.use('/api/movieShows',movieList);
   

const port = process.env.PORT || 3000 ;
app.listen(port,()=>console.log(`Listening to port ${port}......`));