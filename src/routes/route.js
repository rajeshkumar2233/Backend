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



module.exports = router;