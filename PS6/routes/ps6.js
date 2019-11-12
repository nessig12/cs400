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
        //console.log("im after the form submitted");
        const character_n = 'Ron Weasley'; //req.params.name;

        //which character did the person choose?
        let id;
        if (character_n === ('Harry Potter')){
            id = '5a12292a0f5ae10021650d7e';
        }
        else if (character_n === ('Ron Weasley')){// ron weasely
            id = '5a1239c80f5ae10021650dad';
        }
        else if (character_n === ('Draco Malfoy')){
            id = '5a109f8b3dc2080021cd8795';
        }

        //connect to db
        let mongo = db.getDB();

        //check if term is in database !!! either ronweasely or harrypotter
        let in_database = (mongo.collection('hpcharacters').findOne({name: character_n}) != null); ///ask perry about this line cuz its always true

        mongo.collection('hpcharacters').find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
        });

        if (in_database){
            let hp_house = (mongo.collection('hpcharacters').findOne({name: character_n}, {house:1}));

            console.log(`Result from database ${hp_house}`);

            hp_house.then(function(result) {
                console.log(result); // "Some User token"

                res.render('index',
                    {
                        title: "CS400 Assignment 4 ",
                        character_n: character_n,
                        house: result.house,
                        cache: in_database,
                    }
                )
            })


        }
        else { // info is not cached get it from API!!!
            const options = {
                method: 'GET',
                url: 'https://www.potterapi.com/v1/characters/' + id,
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

                mongo.collection('hpcharacters').insertOne({name:character_n, house:result.house}, function (err,r){
                    //res.send('success');
                });

                res.render('index',
                    {
                        title: "CS400 Assignment 4 ",
                        character_n: character_n,
                        house: result.house,
                        cache: in_database,
                    }
                )
            })
        }
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
