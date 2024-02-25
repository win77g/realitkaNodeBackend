const mongoose = require("mongoose");



// model MainCategory
const CertifikatSchema = new mongoose.Schema({
  maklere: {type: String},
  maklere_foto: [{type:String}],
  maklere_email: [{type:String}],
  certifikat_foto: {type: String},
  justoCod: {type: String},

},{ timestamps: true },)



 
// function to slugify a name


// Creating model objects
const Certifikat = mongoose.model("Certifikat", CertifikatSchema);

module.exports = Certifikat;