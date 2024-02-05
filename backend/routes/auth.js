const express = require('express')
const router = express.Router()


//create a user using:POST "/api/auth". Doesnt require auth
router.get('/', (req, res) => {
    console.log(req.body);
    res.send("hi pHuke")
  
  
    /*  obj = {
        a: 'rohan',
        num:34
    }
    res.json(obj)*/


})
module.exports=router