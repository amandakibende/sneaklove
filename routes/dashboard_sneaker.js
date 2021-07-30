const { Router } = require("express");
const express = require("express"); // import express in this module
const { route } = require(".");
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");



router.get("/sneakers/collection", (req, res, next)=>{
    
 
})


router.get("/create", (req, res, next)=>{
    res.render("products_add.hbs")
});

router.post("/create", (req, res, next) =>{
    console.log("here")
    console.log(req.body);
 
})





module.exports = router;
