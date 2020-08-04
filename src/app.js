const express = require('express')
const app = express()
const list = require('./movies-data-small.json')

// Write your solution here



app.get('/movies', function handleMovies(req, res) {
  let { genre, country, avg_vote } = req.query;
  let result = list;
  
  
  
  if(genre){
    genre = genre.toLowerCase()
    result = result.filter(movie => movie.genre.toLowerCase().includes(genre))
  }
  
  if(country){
    country = country.toLowerCase()
    result = result.filter(movie => movie.country.toLowerCase().includes(country))    
    console.log(typeof avg_vot, result);
  }
  
  if(avg_vote){
    avg_vote = Number(avg_vote)
    result = result.filter(movie => movie.avg_vote >= avg_vote)
  }
  
  res.json(result)
  
})

/* usually, we'd use listen() to let the app listen on some port;
  instead, we're exporting the app for Chai to test directly */
// app.listen(port);
module.exports = app;