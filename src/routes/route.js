
const express = require('express');
const app = express.Router();




let persons = [
    {
      name : "PK",
      age : 10,
      votingStatus : false
    },
    {
      name : "SKk",
      age : 20,
      votingStatus : false
    },
    {
      name : "AA",
      age : 70,
      votingStatus : false
    },
    {
      name : "SC",
      age : 5,
      votingStatus : false
    },
    {
      name : "HO",
      age : 40,
      votingStatus : false
    }
  ]
  
  app.post('/votingStatus', function(req,res){
    let voteAge = req.query.age;
    let votePersons = persons.filter(index => index.age >= voteAge)
   votePersons.forEach(index => index.votingStatus = true);
  
    res.send(votePersons);
  })
  
  module.exports = app