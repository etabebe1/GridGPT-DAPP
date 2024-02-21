const express = require("express");
const router = express.Router();

const { verifyToken } = require("../utils/verifyUser");
const {
  createItem,
  getUserListing,
  deleteListing,
  updateListing,
  getListingItem,
  searchListing,
} = require("../controllers/listing.controller");

router.route("/create").post(createItem);
router.route("/user/:id").post(verifyToken, getUserListing);
router.route("/delete/:id").post(verifyToken, deleteListing);
router.route("/update/:id").post(verifyToken, updateListing);
router.route("/getListItem/:id").get(getListingItem);
router.route("/search").get(searchListing);

module.exports = router;
