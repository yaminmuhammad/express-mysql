const express = require("express");
const userController = require("../controller/users");
const router = express.Router();

// CREATE POST
router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

module.exports = router;
