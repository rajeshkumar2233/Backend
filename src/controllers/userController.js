const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,   
      msg: "username or the password is not corerct",  
    });
  if (user.isDeleted) return res.send("user is deleted already")

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
 
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails || userDetails.isDeleted)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user || user.isDeleted) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const postMessage = async function (req, res) {
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user || user.isDeleted) return res.send({status: false, msg: 'No such user exists'})
    let updatedPosts = user.posts
    
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {upsert:true,new: true})

  
    return res.send({status: true, data: updatedUser})   
}     

const deleteUser =async function(req,res){
  let userId=req.params.userId;
  let user =await userModel.findById(userId)
  console.log(user)
   //Return an error if no user with the given id exists in the db
   if (!user) {
    return res.send("No such user exists");
  }
  if(user.isDeleted){
    return res.send("User data is already Deleted");  
  }
  let deleteFlag=await userModel.updateOne({_id:userId},{$set:{isDeleted:true}},{upsert:true})
  res.send({msg:"user successfully deleted",data:deleteFlag})
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser=deleteUser;