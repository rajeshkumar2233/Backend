const trim = function(){
    let me = "   function  up   ";
    let result = me.trim();
    console.log(result)
    }
    
    const lowercase = function(){
    let a = "HELLO";
    let lower = a.toLowerCase();
    console.log(lower)
    }
    
    const uppercase = function(){
    let b = "  javaScript";
    let upper = b.toUpperCase();
    console.log(upper)
    }
    
   
    
   
    trim()
    lowercase()
    uppercase()
    
    
   
    module.exports.trim = trim
    module.exports.lowercase = lowercase
    module.exports.uppercase = uppercase
   