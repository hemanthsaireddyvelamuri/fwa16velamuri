var express = require('express');
var router = express.Router();
var value;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
     value =Number(search_params.get("x"))
    if(value == 0)
    value=Math.random()
    res.write("Computes the values for Math.tan and math.sqrt function."+"\n")
    res.write('Math.tan applied to '+value+" is "+Math.tan(value)+"\n");
    res.end('Math.sqrt applied to '+value+" is "+Math.sqrt(value));
 });

module.exports = router;x