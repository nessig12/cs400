var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CS 400 PS4' });
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'CS 400 PS4' });
});

module.exports = router;
