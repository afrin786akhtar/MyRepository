const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// user 
router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

// books

router.post("/createbook" , BookController.createbook)  

router.get("/getBookData" , BookController.getBookData)  

module.exports = router;