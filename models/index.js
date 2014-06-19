var mongoose = require('mongoose');
require('../config/Config');
mongoose.connect(global.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', global.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');


exports.User = mongoose.model('User');
