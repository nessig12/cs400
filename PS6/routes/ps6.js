const express = require('express');
const router = express.Router();
const request = require('request');
const db = require('../mongo/mongo');

db.connect((err,client) => {
    if (err){
        console.log(`ERR:`);
    }
    else{
        console.log(`CONNECTED`);
    }
});

router.route('/')
    .post(function (req, res, next) {
        console.log("im after the form submitted");

        const character_n = 'HarryPotter'; //req.params.name;

        let num;
        if (character_n == 'HarryPotter'){
            num = 109;
        }
        else {// ron weasely
            num = 150;
        }

        const options = {
            method: 'GET',
            url: 'https://www.potterapi.com/v1/characters',
            qs: {
                key: '$2a$10$8iXOkF8dl5qOG57eGMO5FO9EDcMeU1Xi7G3ybFVipqnhzUD9Xs0v6',
            }
        };
        request(options, function (error, response, body) {
            console.log(`Response: ${response}`);
            if (error) throw new Error(error);

            console.log(`Body: ${body}`);

            const result = JSON.parse(body);

            console.log(`result: ${result}`);

            res.render('index',
                {
                    title: "CS400 Assignment 4 ",
                    name: result[num].name,
                    house: result[num].house,
                }
            )
        })
    });

router.route('/')
    .get(function (req, res, next) {
        console.log("im before the form submitted");
        res.render('form',
            {
                title: "CS400 Assignment 4 ",
            }
        )
    });
module.exports = router;
