const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    req:{
          type:[Number],
          required:true
     },
     total:{
          type:Number,
          required:true
     } ,
     name:{
          type:String,
          required:true
     },
     userid:{
          type:mongoose.Types.ObjectId,
          required:true
     }
})

const Action = mongoose.model('Action',actionSchema);
module.exports = Action;
