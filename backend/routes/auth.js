const express = require('express')
const router = express.Router()
const User=require('../models/User')


//create a user using:POST "/api/auth". Doesnt require auth
router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
  
  
    /*  obj = {
        a: 'rohan',
        num:34
    }
    res.json(obj)*/


})
module.exports=router