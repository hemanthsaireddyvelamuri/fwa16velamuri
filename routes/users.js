var express = require('express');
var router = express.Router();
var alpha

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  alpha = alpha+1
  res.send('User accesses are: ${alpha}');
  
});

module.exports = router;
