var express = require('express');
var router = express.Router();

/* This describes my fun factors */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Hemanth Sai Reddy velamuri' });
});

module.exports = router;