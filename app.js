require('dotenv').config()
require('./config/db');
const express = require('express');
const route = require('./routes/index');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(route);

app.listen(process.env.port,()=>{
    console.log(`server start in ${process.env.port}`);
})
    