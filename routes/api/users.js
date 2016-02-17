var express = require('express');
var router = express.Router();

var Planet = require('../../app/models/user');

router.get('/', function(req, res){
  Planet.find({}, function(err, users) {
    res.json({ Users: users });
  });
});


module.exports = router;
