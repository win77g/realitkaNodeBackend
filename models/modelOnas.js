const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const OnasSchema = new mongoose.Schema({
  image: {type: String},
  description: {type: String},
})



// Creating model objects
const Onas = mongoose.model("Onas", OnasSchema);

module.exports = Onas;