var models = require('../models');
var User = models.User;

// exports.getUser = function (userid, callback) {
// 	User.findOne({id: id}, callback);
// };

exports.getUserByName = function (username, callback) {
	User.findOne({name : username}, callback);
};

// exports.addUser = function (one, callback) {
// 	var user = new User();
// 	user.save(function (err) {
// 		callback(err, callback);
// 	});
// };

