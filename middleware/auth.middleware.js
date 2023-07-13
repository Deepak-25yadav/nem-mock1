
const jwt = require("jsonwebtoken");
const {UserModel}=require("../model/user.model")
require('dotenv').config()

const auth = async(req,res,next) =>{
  const token = req.headers.authorization?.split(" ")[1];
  if(token){
    const decoded = jwt.verify(token,process.env.secretKey);
    if(decoded){
        req.body.userID = decoded.userID;
        req.body.userName=decoded.userName;
        next();
    }else{
        res.status(200).send({"msg":"Login First"});
    }
  }else{
   res.status(200).send({"msg":"Login First"});
  }
}



const validator=async(req,res,next)=>{
const {email}=req.body
try {
  const registeredUser= await UserModel.findOne({email})
  if(registerdUser){
    res.json("User already exist")
  }
  else{
    next()
    res.json("This is our a new user")
  }
} catch (error) {
  res.json(error)
}

}

