/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const wineSchema = new Schema({
  name: String,
  vineyard: String,
  vintage: Number,
  label: String, //[{type: Schema.Types.ObjectId, ref: 'Picture'}],
  expertNotes: {
    appearance: {
      intensity: {type: String, default: 'none'},
      color: {type: String, default: 'none'},
    },
    nose: {
      floral: {type: String, default: 'none'},
      redFruit: {type: String, default: 'none'},
      blackFruit: {type: String, default: 'none'},
      dryFruit: {type: String, default: 'none'},
      herbsSpices: {type: String, default: 'none'},
      quirky: {type: String, default: 'none'},
    },
    palate: {
      redFruit: {type: String, default: 'none'},
      blackFruit: {type: String, default: 'none'},
      dryFruit: {type: String, default: 'none'},
      herbsSpices: {type: String, default: 'none'},
      quirky: {type: String, default: 'none'},
    }
  },
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at" }
  });

  const Wine = mongoose.model("Wine", wineSchema);

  module.exports = Wine;
