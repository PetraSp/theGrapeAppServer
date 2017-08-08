/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const notesSchema = new Schema({
  appearance: {
    intensity: {type: String, default: 'default'},
    color: {type: String, default: 'default'}},
  nose: {
    floral: {type: String, default: 'default'},
    redFruit: {type: String, default: 'default'},
    blackFruit: {type: String, default: 'default'},
    dryFruit: {type: String, default: 'default'},
    herbsSpices: {type: String, default: 'default'},
    quirky: {type: String, default: 'default'} },
  palate: {
    redFruit: {type: String, default: 'default'},
    blackFruit: {type: String, default: 'default'},
    dryFruit: {type: String, default: 'default'},
    herbsSpices: {type: String, default: 'default'},
    quirky: {type: String, default: 'default'} }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
