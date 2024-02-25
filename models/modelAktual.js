const mongoose = require("mongoose");



// model MainCategory
const AktualSchema = new mongoose.Schema({
  title: {type: String},
  maklere: {type: String},
  maklere_foto: [{type:String}],
  text : {type: String},
  image: {type: String},
  video: {type:String},
  
  
},{ timestamps: true },)



 
// function to slugify a name


// Creating model objects
const Aktual = mongoose.model("Aktual", AktualSchema);

module.exports = Aktual;