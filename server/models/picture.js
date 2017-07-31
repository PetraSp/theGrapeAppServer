/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const picture = new Schema({
  filename: String,
  url: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;
