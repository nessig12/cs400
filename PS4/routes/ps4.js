const express = require('express');
const router = express.Router();
const request = require('request');

router.route('/')
    .get(function (req, res, next) {
        const options = {
            method: 'GET',
            url: 'https://webknox-jokes.p.rapidapi.com/jokes/search',
            qs: {
                minRating: '5',
                numJokes: '10',
                keywords: 'fun, kick'
            },
            headers: {
                'x-rapidapi-host': 'webknox-jokes.p.rapidapi.com',
                'x-rapidapi-key': 'a0810889d4msh4f61b462cec4528p12895djsn1395bb10d671'
            }
        };
        request(options, function (error, response, body) {
            console.log(`Response: ${response}`);
            if (error) throw new Error(error);

            console.log(`Body: ${body}`);

            const result = JSON.parse(body);

            let num = Math.round(Math.random() * 10)
            const info = result[num];

            res.render('index',
                {
                    title: "CS400 Assignment 4 ",
                    joke: info.joke,
                    category: info.category,
                    rating: info.rating,
                }
            )
        })
    });

module.exports = router;
