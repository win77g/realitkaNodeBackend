const mongoose = require("mongoose");



// model MainCategory
const CardCompanySchema = new mongoose.Schema({
  company: {type: String},
  adres: {type: String},
  tym: {type: String},
  reference: {type: String},
  certifikat: {type: String},
  phone: {type: String},
  phone1: {type: String},
  email: {type: String},
  juredickaRegistrace:{type:String},
  ic:{type:String},
  dic:{type:String},
  bankUcet:{type:String},
  rezervUcet:{type:String},
  datovaSchranka:{type:String},
  web:{type:String},
  lat:{type:String},
  lng:{type:String}
})



// Creating model objects
const CardCompany = mongoose.model("CardCompany", CardCompanySchema);

module.exports = CardCompany;