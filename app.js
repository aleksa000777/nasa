var express      =   require('express');
var mongoose     =   require('mongoose');
var bodyParser   =   require('body-parser');
var morgan       =   require('morgan');
var port         =   process.env.PORT || 8080;
var passport     =   require('passport');
var flash        =   require('connect-flash');
var session      =   require('express-session');
var cookieParser =   require('cookie-parser');
var request      =   require('request')
require('dotenv').load()


require('./config/passport')(passport);  //pass passport for configuration

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

// required for passport
app.use(session({secret: 'aleksandramatiyevborzunovaandreevna'})); //session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); //use connect flash for flash messages stored in session


// routes
require('./app/routes.js')(app,passport); //load routes and pass in our app and fully configured passport
var nasaRouter = require('./routes/api/planets.js');
app.use('/api/planets', nasaRouter);


// listen
app.listen(port,function(){
  console.log('listening on port ' + port);
});
