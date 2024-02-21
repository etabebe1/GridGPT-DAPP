const express = require("express");
const router = express.Router();

const {
  sign_up,
  sign_in,
  google,
  signOut,
} = require("../controllers/auth.controller");

router.route("/sign-up").post(sign_up);
router.route("/sign-in").post(sign_in);
router.route("/google").post(google);
router.route("/sign-out").get(signOut);

module.exports = router;
