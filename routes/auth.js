const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require ("bcrypt");

const SALT = 20;


router.get("/signup", (req, res, next)=>{
    res.render("signup.hbs")
});

router.post("/signup", async (req, res, next)=>{
    try {
        const user = req.body;

        if (!user.name || !user.password || ! user.email || !user.lastname) {

            res.render("signup.hbs", {
                errorMessage : "We need all your info pleeease !"
            });
            return;
        }

        const userFound = await User.findOne({ email : user.email});

        if (userFound){
            res.render("signup.hbs", {
                errorMessage : "Too bad, email already taken",
            });
            return;
        }


    } catch(error){next (error)}
  
});





module.exports = router;
