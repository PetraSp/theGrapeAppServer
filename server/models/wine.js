/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const wineSchema = new Schema({
  name: String,
  vineyard: String,
  vintage: Number,
  label: String, //[{type: Schema.Types.ObjectId, ref: 'Picture'}],
  expertNotes: [{ type: Schema.Types.ObjectId, ref: 'Notes'}],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
