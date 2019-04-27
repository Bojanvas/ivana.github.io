var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root : __dirname + '/views'});
});

/* GET home page. */
router.get('/client:id', function(req, res, next) {
  var fileName = req.params.id;
  console.log(fileName);
  res.sendFile('client.html', {root : __dirname + '/views'});
});

module.exports = router;
