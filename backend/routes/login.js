const router = require("express").Router();
const UserLogin = require('../models/user')
const jwt = require('jsonwebtoken')
const { password_jwt } = require('../../config.json')
router.get('/', async (req, res) => {
    res.status(200).send({status: "ok"})
    res.end()
})

router.post('/post', async (req, res) => {
    const user = await UserLogin.findOne({
        Username: req.body.username,
        Password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            username: req.body.username,
            password: req.body.password
        },password_jwt)

        return res.status(200).send({status:"ok", user: token})
    } else {
        return res.status(200).send({status:"error", user: false})
    }
})

module.exports = router