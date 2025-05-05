const express = require("express")
const router = express.Router()
const {addUser, getUsers} = require("../controllers/dataController")
router.post("/add", addUser)
router.get("/users", getUsers)

module.exports = router