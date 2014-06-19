var express = require('express');
var routes = express.Router();

var User = require('../proxy').User;

/* GET users listing. */
routes.get('/:username', function(req, res) {
  // res.send('respond with a resource');
  var username = req.params.username;
  // res.send('Hi, ' + username);
  User.getUserByName(username, function(err, data) {
  	if (err) {
  		console.log("user error");
  	}
  	console.log(data);
  	res.render('index', {title: data.name});
  });

});

module.exports = routes;
