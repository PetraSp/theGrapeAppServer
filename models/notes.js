/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const notesSchema = new Schema({
  appearance: {
    colorSchema: {type: String, default: 'none'}
  },
  nose: {
    floral: {type: String, default: 'none'},
    redFruit: {type: String, default: 'none'},
    blackFruit: {type: String, default: 'none'},
    driedFruit: {type: String, default: 'none'},
    herbs: {type: String, default: 'none'},
    quirky: {type: String, default: 'none'},
  },
  palate: {
    floral: {type: String, default: 'none'},
    redFruit: {type: String, default: 'none'},
    blackFruit: {type: String, default: 'none'},
    driedFruit: {type: String, default: 'none'},
    herbs: {type: String, default: 'none'},
    quirky: {type: String, default: 'none'},
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" 
  }
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
