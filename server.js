var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/restfullnodeTest');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

// app.get('/',function(request, response){
//  response.send('Hello there i am ready to work1');
// });

app.listen(3030);
console.log('node is running on port:3030');
