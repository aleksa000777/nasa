module.exports = function(app, passport){

  app.get('/', function(req, res){
    res.render('index.ejs');
  });


  // login form
  app.get('/login', function(req, res){
    res.render('login.ejs', {message: req.flash('loginMessage') });
  });

  app.get('/signup', function(req, res){
    res.render('signup.ejs', {message: req.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', //redirect to the secure profile section
    failureRedirect : '/signup', //redirect back to the signup page if there is an error
    failureFlash : true //allow flash messages
  }));

  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', {
      user: req.user
    });
  });

  // logout
  app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',  //redirect to secure profile section
    failureRedirect : '/login', //redirect back to the singup page if there is an error
    failureFlash : true //allow flash messages
  }));

  
};


function isLoggedIn(req, res, next){
  if(req.isAuthenticated())
  return next();

  // if no
  res.redirect('/');
}
