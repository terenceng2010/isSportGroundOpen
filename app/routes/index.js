var express = require('express');
var router = express.Router();
/* GET home page. */
var fs = require('fs');

router.get('/', function(req, res, next) {
  var sportgroundList = JSON.parse(fs.readFileSync('../sportgroundList.json', 'utf8'));
  console.log(sportgroundList);
  res.render('index', { title: 'Is Sport Ground Open Today?'
                        ,sportgroundList: sportgroundList
   });
});

module.exports = router;
