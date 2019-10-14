const express = require('express');
const router = express.Router();
const request = require('request');

router.route('/')
    .get(function (req, res, next) {
        const options = {method: 'GET', url: ' http://www.omdbapi.com/?i=tt3896198&apikey=ae9419f7',};
        request(options, function (error, response, body) {
            console.log(`Response: ${response}`);
            if (error) throw new Error(error);

            console.log(`Body: ${body}`);

            const result = JSON.parse(body);

            res.render('ps3',
                {
                    name: result.Title,
                    release: result.Released,
                }
            )
        })
    })
    .post(function (req, res, next) {
        let stuff = req.body;

        console.log(stuff);
        res.render('ps3', stuff);
    })



module.exports = router;
