const mongoose = require("mongoose");

const thambnailSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoName: {
      type: String,
      required: true,
    },
    version: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    paid: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Thambnail", thambnailSchema);
