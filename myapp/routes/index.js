var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('../public/index.html');
});
router.get('/hello',function(req,res,next){
  res.send('hellworld');

});



module.exports = router;
