const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create a user using:POST "/api/auth/create user". no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),

    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid pass").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors, return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exists already
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res
            .status(400)
            .json({ error: "Sorry your email is already exists" });
          }
          //crate user
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        res.json(user);
      } catch (error) {
          console.log(error.message);
          res.status(500).send("some error ocured");
      }
    // .then(user => res.json(user))
    // .catch(err => {
    //     console.log(err)
    // res.json({error:'Pleasw enter a unique value',message : err.message})
    // })

    /*  obj = {
        a: 'rohan',
        num:34
    }
    res.json(obj)*/
  }
);
module.exports = router;
