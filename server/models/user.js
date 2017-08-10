/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  city: String,
  avatar: String, //[{type: Schema.Types.ObjectId, ref: 'Picture'}],
  tasting: String //[{type: Schema.apply.ObjectId, ref: 'Tasting'}]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
