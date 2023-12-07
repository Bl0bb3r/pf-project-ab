const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create mongodb schema
const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  date: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("item", ItemSchema);
module.exports = Item;
