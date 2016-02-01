var express = require('express');
var router = express.Router();

var Planet = require('../../models/planet');

router.get('/', function(req, res){
  Planet.find({}, function(err, planets) {
    res.json({ Planet: planets });
  });
});




module.exports = router;
