const printDate = function (){
    const today = new Date();
const date = (today.getDate());
console.log(date)
}

const printMonth = function(){
    const today =  new Date();
    const date = ( (today.getMonth()+1));
    console.log(date)
}


const getBatchInfo = function() {
    console.log(' Plutonium, W3D5, the topic for today is Nodejs module system')
}

printDate()
printMonth()
getBatchInfo()


module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo