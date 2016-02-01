var express = require('express')
var morgan = require('morgan')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
require('dotenv').load();

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/nasa-1');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));

var indexRouting = require('./routes/index');
var nasaRouter = require('./routes/api/planets');

app.use('/', indexRouting);
app.use('/api/planets', nasaRouter);




var port = 8080;
app.listen(port, function(){
  console.log('listening on potr: '+port);
})
