const router = require("express").Router();
const UserLogin = require("../models/user");
const jwt = require("jsonwebtoken");
const { password_jwt } = require('../../config.json')
router.get("/", async (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ msg: "token not found" });

  try{
    const decoded = jwt.verify(token, password_jwt)
    const username = decoded.username
    const password = decoded.password
    const checkUser = await UserLogin.findOne({Username: username})
    if(checkUser){
      return res.status(200).send({status:"ok", username: username})
    }else{
      return res.status(401).send({status: "error", error: "user not found in database"})
    }
  }catch(err){
    console.log(err)
    return res.status(401).send({status: "error", error:"invalid token"})
  }
});

module.exports = router;
