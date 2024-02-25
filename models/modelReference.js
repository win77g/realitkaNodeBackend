const mongoose = require("mongoose");



// model MainCategory
const ReferenceSchema = new mongoose.Schema({
  title: {type: String},
  name_client:{type:String},
  email_client:{type:String},
  phone_client:{type:String},
  maklere: {type: String},
  maklere_foto: [{type:String}],
  text : {type: String},
  image: {type: String},
  video: {type:String},
  status: {type:String}
  
},{ timestamps: true },)



 
// function to slugify a name


// Creating model objects
const Reference = mongoose.model("Reference", ReferenceSchema);

module.exports = Reference;