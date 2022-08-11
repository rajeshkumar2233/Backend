const express = require('express');
const router = express.Router();



let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]

router.post('/players', function (req, res) {
    let status = true;
    for (let i = 0; i < players.length; i++) {
        if (players[i]["name"] === req.body.name) {
            console.log("This player was already added")
            status = false
            break
        }
    }
    if (status === true) {
        console.log("Record Inserted ")
        players.push(req.body)
    }

    console.log(players)

    res.send("done")
});

module.exports = router;