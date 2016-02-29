module.exports = function(app){

  app.get('/', function(req, res){
    res.render('profile.ejs');
  });

  var request      =   require('request')
  require('dotenv').load()
  app.get('/profile/day', function(req,res){
    request("https://api.nasa.gov/planetary/apod?api_key=" + process.env.SECRETACCESSKEY, function(err, response, body){
      res.json(JSON.parse(response.body));
  })
})

}
