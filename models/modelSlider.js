const mongoose = require("mongoose");
var convert = require('cyrillic-to-latin')


// model MainCategory
const SliderSchema = new mongoose.Schema({
  image: [{type: String}],
})



// Creating model objects
const Slider = mongoose.model("Slider", SliderSchema);

module.exports = Slider;