var express = require('express');
var router = express.Router();

var Planet = require('../../app/models/planet');

router.get('/', function(req, res){
  Planet.find({}, function(err, planets) {
    res.json({ Planet: planets });
  });
});

// ======aleksa====

router.get('/:name', function(req, res){
  console.log(req.params.name);
  console.log('req.body', req.params);
  Planet.findOne({ title: req.params.name }, function(err, planet) {
    res.json({ Planet: planet });
  });
});

//=====aleksa=====

module.exports = router;
