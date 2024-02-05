const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require("express-validator");


//create a user using:POST "/api/auth". Doesnt require auth
router.post('/', [
    body('name','Enter a valid name').isLength({min:5}),

    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid pass').isLength({min:5})
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
         email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
        res.json({error:'Pleasw enter a unique value',message : err.message})
        })

  
  
  
    /*  obj = {
        a: 'rohan',
        num:34
    }
    res.json(obj)*/


})
module.exports=router