
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId", mw.authenticate,mw.authorise,userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)
router.put("/users/:userId",mw.authenticate,mw.authorise, userController.updateUser)
router.delete('/users/:userId',mw.authenticate,mw.authorise, userController.deleteUser)

module.exports = router;