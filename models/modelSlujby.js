const mongoose = require("mongoose");



// model MainCategory
const SlujbySchema = new mongoose.Schema({
  title: {type: String},
  cena: {type: String},
  maklere: {type: String},
  maklere_foto: [{type:String}],
  maklere_email: {type:String},
  text : {type: String},
  
  
  
},{ timestamps: true },)



 
// function to slugify a name


// Creating model objects
const Slujby = mongoose.model("Slujby", SlujbySchema);

module.exports = Slujby;