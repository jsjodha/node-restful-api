var express = require('express');
var router = express.Router();


var product = require('../models/product');


product.methods(['get','put','post','delete']);
product.register(router,'/products');



module.exports = router;