const express = require('express');
const router = express.Router();
const {UserModel} = require("../db/dbaccessor")

const login = async (user, res) => {
    let result = await UserModel.findOne(user)
    if (result) {
        res.json({
            code : 200
        });
    } else {
        res.status(404).json({
            code : 500
        });
    }
}

router.post('/login', (req, res) => {
    let user = req.body;
    login(user, res)
})

router.get('/', function (req, res) {
    UserModel.find().then(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users)
    })

})

exports.userRouter = router