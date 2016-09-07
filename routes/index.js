var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This application is used for testing Mocha and Chai testing' });
});

module.exports = router;
