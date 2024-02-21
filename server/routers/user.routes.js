const express = require("express");
const router = express.Router();

const { verifyToken } = require("../utils/verifyUser");
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/user.controller");

router.route("/get/:id").post(verifyToken, getUser);
router.route("/update/:id").post(verifyToken, updateUser);
router.route("/delete/:id").post(verifyToken, deleteUser);

module.exports = router;
