const mongoose = require('mongoose');
mongoose.connect(process.env.url).then(()=>{
    console.log('databas connect');
}).catch((e)=>{
    console.log(e.message);
})