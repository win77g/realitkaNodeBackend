const mongoose = require("mongoose");



// model MainCategory
const MaklereSchema = new mongoose.Schema({
  name: {type: String},
  phone : {type: String},
  image: [{type: String}],
  email: {type:String},
  pozice: {type: String},
  
},{ timestamps: true },)



 
// function to slugify a name


// Creating model objects
const Maklere = mongoose.model("Maklere", MaklereSchema);

module.exports = Maklere;