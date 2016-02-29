var express      =   require('express');
var mongoose     =   require('mongoose');
var bodyParser   =   require('body-parser');
var morgan       =   require('morgan');
var port         =   process.env.PORT || 8080;
var cookieParser =   require('cookie-parser');
var request      =   require('request')
require('dotenv').load()


var app         =   express();

var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/naso-02'
var mongoose = require('mongoose');
mongoose.connect(mongoPath);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static('./public'));



// routes
require('./app/routes.js')(app);
var nasaRouter = require('./routes/api/planets.js');
app.use('/api/planets', nasaRouter);



// listen
app.listen(port,function(){
  console.log('listening on port ' + port);
});
