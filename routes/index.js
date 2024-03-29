var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', nav: true });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express', nav: false });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express', nav : false });
});

module.exports = router;
