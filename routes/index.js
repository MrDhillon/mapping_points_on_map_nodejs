var models = require('../models');
var express = require('express');
var router = express.Router();
var querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  // query database for locations using sequalize ---- Harman
  models.location.findAll().then(function(data){
    // promise to wait for database and to handle errors
    // render index with query object for use with ejs
    res.render('index', {
      title: 'TurnStyle Mapping',
      locations: data
    });
  }).catch(function(err){
    console.log(err);
    res.render('index',{ title: "TurnStyle Mapping"});
  });
});

router.post('/',function(req,res){
  // user marker id to query databse for location
  models.location.findAll({
    where: {
      id: req.body.marker
    }
  }).then(function(data){
    res.send(data);
  }).catch(function(err){
    console.log(err);
    res.render('index',{ title: "TurnStyle Mapping"});
  });
});

module.exports = router;
