const lodash=require('lodash')
const express = require('express');

const externalModule = require('../logger/logger.js')
const externalModule1 = require('../util/helper.js')
const externalModule2 = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    
    externalModule.welcome()
    
    
    externalModule1.printDate()
    externalModule1.printMonth()
    externalModule1.getBatchInfo()

   
    externalModule2.trim()
    externalModule2.lowercase()
    externalModule2.uppercase()
   

    

    res.send('My first ever api!')
});




router.get('/testme',function(req,res){


const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
console.log('Single Array Chunked into 4 sub groups by lodash module',lodash.chunk(months,4))

const arr=[1,3,5,7,9,11,13,15,17,19]
console.log('Printing all elements except first element',lodash.tail(arr).toString())



const numarr1=[1,2,3]
const numarr2=[3,5,6]
const numarr3=[2,4,6]
const numarr4=[5,7,1]
const numarr5=[1,6,4,8,9]
console.log('Printing uniques values from all Arrays ',lodash.union(numarr1,numarr2,numarr3,numarr4,numarr5))

const pair1=["horror","The Shining"];
const pair2=["drama","Titanic"]
const pair3=['thriller','Shutter Island']
const pair4=['fantasy','Pans Labyrinth']
console.log("Array converted to object",lodash.fromPairs([pair1,pair2,pair3,pair4]))
res.send(' hello api!')
});

module.exports = router;
 