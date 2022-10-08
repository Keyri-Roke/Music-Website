var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.html', { title: 'Express' });
});

router.get('/music', function(req, res, next) {
  res.render('../templates/music.html')
});


module.exports = router;