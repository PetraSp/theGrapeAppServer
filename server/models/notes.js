/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const notesSchema = new Schema({
  appearance: {
    intensity: String,
    color: String},
  nose: {
    redFruit: String,
    blackFruit: String,
    dryFruit: String,
    herbsSpices: String,
    quirky: String },
  palette: {
    redFruit: String,
    blackFruit: String,
    dryFruit: String,
    herbsSpices: String,
    quirky: String }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
