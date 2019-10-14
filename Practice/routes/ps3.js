const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/',function (req, res, next) {
    const options = {
        method: 'GET',
        url: ' http://www.omdbapi.com/?i=tt3896198&apikey=ae9419f7', //'http://www.omdbapi.com/?t=mean+girls',
    };
    request(options, function(error, response, body) {
        console.log(`Response: ${response}`);
        if (error) throw new Error(error);

        console.log(`Body: ${body}`);

        const result = JSON.parse(body);

        res.render('ps3',
            {
                title: "CS 400 Assignment",
                name: result.Title,
                release: result.Released,
            }
        )
    });
});

router.post('/',function (req, res, next) {
    let stuff = req.body;
    res.render('ps3', stuff );
});

module.exports = router;
