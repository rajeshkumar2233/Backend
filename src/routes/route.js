const express = require('express');
const router = express.Router();

 
   // -write an api which gives the missing number in an array of integers starting from 1….
  // e.g [1,2,3,5,6,7] : 4 is missing
  
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array.
    // now take sum of numbers till last digit in the array
 


router.get("/sol1", function (req, res) {
   
    let arr = [1, 2, 3, 5, 6, 7]
    function missingNumber(arr){
        for (let i = 0; i < arr.length; i++){
            if (i+1 != arr[i]){
                return  arr[i]-1
            }
        }
    }
    let   result = missingNumber(arr)
     res.send(result.toString())
    
})

    // -write an api which gives the missing number in an array of integers starting from anywhere…
    //.e.g [33, 34, 35, 37, 38]: 36 is missing

    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. 
    //now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing


router.get("/sol2", function (req, res) {
let arr= [33, 34, 35, 37, 38]
let len= arr.length

let total = 0;
for (var i in arr) {
    total += arr[i];
}

let arr1= arr[0]
let arrlast= arr.pop()
let Sum= (len + 1) * (arr1+ arrlast ) / 2
let missNumb= Sum - total

res.send(  { data: missNumb  }  );
});


module.exports = router;
