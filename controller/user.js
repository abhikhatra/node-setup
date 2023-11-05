const Action = require("../model/actionModel");
const User = require("../model/userModal");
const jwt = require('jsonwebtoken');

exports.createUser = async (req,res)=>{

  const {name,email,password} = req.body

 const user = await User.create({name,email,password});

 return res.json({
  success:true,
  user
 })
  
}

exports.loginUser = async (req,res)=>{
  const {email,password} = req.body

 try {
   const findedUser = await User.findOne({email})
   if(password !== findedUser.password){
     throw "password miss match"
   }
   const token = await jwt.sign({ email },process.env.key)
    return res.json({
     success:true,
     token,
     message:"user login"
    })
 } catch (e) {
  console.log(e);
  return res.json({
    success:false,
    error:e.message
   })
 }

}

exports.addition = async (req,res)=>{
  const user = req.user
  console.log(user);
  const numbers = req.body
    let total = 0
  numbers.map((number)=>{
  total = total+number   
  })
//   console.log(total);
 const recored = await Action.create({
   userid:user._id,
  req:numbers,
  total:total,
  name:'addition'
 })
return res.json({
    success:true,
       total:total
})
}

exports.substraction = async (req,res)=>{
  const user = req.user
    const numbers =req.body
      let total = 0
    numbers.map((number)=>{
    total = total-number   
    })
  //   console.log(total);
  const recored = await Action.create({
    userid:user._id,
    req:numbers,
    total:total,
    name:'substraction'
   })
  return res.json({
      success:true,
         total:total
  })
}


