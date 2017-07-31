/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const tastingSchema = new Schema({
  userID: String,
  score: String,
  wine: [{ type: Schema.Types.ObjectID, ref: 'Wine'}],
  userNotes: [{ type: Schema.Types.ObjectID, ref: 'Notes'}]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const Tasting = mongoose.model("Tasting", tastingSchema);

module.exports = Tasting;
