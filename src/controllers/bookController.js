const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")


let createAuthor=async(req,res)=>{ 
    let data=req.body
    let saveData= await AuthorModel.create(data)
    res.send({msg:saveData}) 
}

let createBook=async(req,res)=>{ 
    let data=req.body
    let saveData= await BookModel.create(data)
    res.send({msg:saveData})
}

let getBooksbyChetanBhagat=async(req,res)=>{ 
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id") 
    let bookData =await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

let authorOfBook=async(req,res)=>{  
    let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name ")
    let price=data.price
    res.send({msg:authorData,price})
}

let bookBetween50_100=async(req,res)=>{ 
    let data =await BookModel.find({$and:[{price:{$gt:49}},{price:{$lt:101}}]}).select({author_id:1,_id:0})
    
    let bookidDate=data.map((obj)=>obj.author_id)
    
    let autName =await AuthorModel.find({author_id:{$in:bookidDate}}).select({author_name:1,_id:0})
    console.log(autName)
    data =autName.map((obj)=>obj.author_name)
    res.send({msg:data})
}

module.exports.createAuthor=createAuthor
module.exports.createBook=createBook
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.bookBetween50_100=bookBetween50_100













// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
