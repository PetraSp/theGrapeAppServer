/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const notesSchema = new Schema({
  appearance: {
    color: {type: String, default: 'default'}},
  nose: {
    floral: {type: Array, default: ['none']},
    redFruit: {type: Array, default: ['none']},
    blackFruit: {type: Array, default: ['none']},
    dryFruit: {type: Array, default: ['none']},
    herbsSpices: {type: Array, default: ['none']},
    quirky: {type: Array, default: ['none']},
  },
  palate: {
    redFruit: {type: Array, default: ['none']},
    blackFruit: {type: Array, default: ['none']},
    dryFruit: {type: Array, default: ['none']},
    herbsSpices: {type: Array, default: ['none']},
    quirky: {type: Array, default: ['none']},
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
