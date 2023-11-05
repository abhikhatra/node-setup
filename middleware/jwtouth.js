const jwt = require('jsonwebtoken');
const User = require('../model/userModal');


exports.jwtouth = async (req,res,next)=>{
  console.log('come her');
    const token = req.headers.authorization 
    const decodedToken = jwt.verify(token,process.env.key)
    const email = decodedToken.email
  try {
      const findedUser = await User.findOne({email})
      if(!findedUser){
          throw 'user not found'
      }
      req.user = findedUser
      next();
  } catch (error) {
     console.log(error);
  }
}