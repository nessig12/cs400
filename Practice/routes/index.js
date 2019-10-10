var express = require('express');
var router = express.Router();
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS 400 Assignment' });
});

module.exports = router;
