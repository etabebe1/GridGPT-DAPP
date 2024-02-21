const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    // REMARK: String data types
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    // REMARK: Number data types
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathRooms: {
      type: Number,
      required: true,
    },
    bedRooms: {
      type: Number,
      required: true,
    },
    type: {
      type:String,
      required: true,
    },
    // REMARK: Boolean data types
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imgUrls: {
      type: Array,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("list", listSchema);
