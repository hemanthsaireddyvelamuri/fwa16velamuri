var express = require('express');
var router = express.Router();
var alpha = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  alpha = alpha+1
  res.send('User accesses are: ${alpha}');
  
});

module.exports = router;
