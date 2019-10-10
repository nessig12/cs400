var express = require('express');
var router = express.Router();
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'CS 400 Assignment' });
});

router.get('/ps3',function (req, res, next) {
    const options = {
        method: 'GET',
        url: 'http://apilayer.net/api/live',
        qs:
            {
                access_key:'707d4d2111a1976c7c4bbd767a9bf3a6',
                currencies: 'EUR, %20GBP, JPY',
                format: '0'},
    };
    request(options, function(error, response, body) {
        console.log(`Response: ${response}`);
        if (error) throw new Error(error);

        console.log(`Body: ${body}`);

        const result = JSON.parse(body);

        res.render('ps3',
            {
                eur: result.quotes.USDEUR,
                source: result.source
            }
        )
    });
});

module.exports = router;
