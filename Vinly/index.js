
const express= require('express');
const app = express();
const movie = require('./movies/movie');
app.use(express.json());
app.use('/api/movieList',movie)


   

const port = process.env.PORT || 3000 ;
app.listen(port,()=>console.log(`Listening to port ${port}......`));