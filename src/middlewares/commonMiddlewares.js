const checkHeader= function ( req, res, next) {
    if(req.headers.isfreeuser===undefined)
    res.send({msg:"ERROR - Required header not present"})
    else{
        req.isfreeuser=Boolean(req.headers.isfreeuser)
        // console.log(req.isfreeuser)
        next()
    }
}
//     let header = req.headers
//     let appUser = header["isfreeuser"]
//     if (!appUser){
//         res.send({msg:"ERROR - Required header not present"})
//     }else{
       
//         next()
//     }
       
    
// }

module.exports.checkHeader= checkHeader