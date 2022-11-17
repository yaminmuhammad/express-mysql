const express = require("express");
const userController = require("../controller/users");
const router = express.Router();

// CREATE POST
router.post("/", userController.createUser);

// READ GET
router.get("/", userController.getAllUsers);

// UPDATE - PATCH
router.patch("/:id", userController.updateUser);

// DELETE - DELETE
router.delete("/:id", userController.deleteUser);

module.exports = router;
