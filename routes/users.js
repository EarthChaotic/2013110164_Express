var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//res.send('Hello im under dhe wader please help me');
res.status(200).json({
  fullname:'Jirapon Tresup'
  })
});
router.get('/bio', function(req, res, next) {
  res.status(200).json(
    {
    fullname:'Jirapon Tresup',
    Nickname:'Earth',
    hobby:'Gaming',
    gitusername:'EarthChaotic'
    }
    )
  });



module.exports = router;
