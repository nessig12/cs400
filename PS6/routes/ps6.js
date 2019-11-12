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
        const character_n = req.body.character;

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
        else if (character_n === ('Luna Lovegood')){
            id = '5a109e943dc2080021cd8791';
        }

        //connect to db
        let mongo = db.getDB();

        //check if term is in database !!! either ronweasely or harrypotter

        let in_database;

        mongo.collection('hpcharacters').findOne({name: character_n}, (err, user) => {
            if (err) {
                // handle error
                console.log(`Error occured`);
            }
            if (user) {
                //console.log(`user exist`);
                in_database = true;
                //console.log(`in database? ::: ${in_database}`);
                let hp_house = (mongo.collection('hpcharacters').findOne({name: character_n}, {house:1}));

                //console.log(`Result from database ${hp_house}`);

                hp_house.then(function(result) {
                    //console.log(result); // "Some User token"

                    res.render('index',
                        {
                            title: "CS400 Assignment 4 ",
                            character_n: character_n,
                            house: result.house,
                            cache: in_database,
                        }
                    )
                })
            } else {
                // there is no user
                //console.log(`user DOES NOT exist`);
                in_database = false;
                //console.log(`in database? ::: ${in_database}`);

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
    });

router.route('/')
    .get(function (req, res, next) {res.render('form', {title: "CS400 Assignment 4 ",})});

module.exports = router;
