const router = require("express").Router();

router.get('/', async (req, res) => {
    res.status(200).send("ok")
    res.end()
})

module.exports = router