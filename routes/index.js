const expres = require('express');
const { addition, substraction,createUser,loginUser } = require('../controller/user');

const { jwtouth} = require('../middleware/jwtouth');

const route = expres.Router();

route.post('/add',createUser);
route.post('/login',loginUser)
route.post('/addition',jwtouth,addition);
route.post('/substraction',substraction)
module.exports =route;

