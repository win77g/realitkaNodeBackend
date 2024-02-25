const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
var convert = require('cyrillic-to-latin')



const Date = mongoose.Schema({
  year: {type: Number},
  month: {type: Number},
  day: {type: Number},
  
})

const NemovitostSchema =  new mongoose.Schema({
  idNemovitosti:{type: String},
  maklerName: {type: String},
  maklerID: {type: String},
  maklerImage:[{type:String}],
  majitel: {type: String},
  majitel_telefon: {type: String},
  majitel_email: {type: String},
  komentar : {type: String},
  makler: {type: String},
  typ: {type: String},
  kategory: {type: String},
  podkategory: {type: String},
  status: {type: String},
  velikostDomy: {type: String,set: a => a === '' ? undefined : a},
  description: {type: String,set: a => a === '' ? undefined : a},
  ulice: {type: String,set: a => a === '' ? undefined : a },
  obec: {type: String,set: a => a === '' ? undefined : a},
  castObec: {type: String,set: a => a === '' ? undefined : a},
  psc: {type: String,set: a => a === '' ? undefined : a},
  stat: {type: String,set: a => a === '' ? undefined : a},
  cena: {type: String,set: a => a === '' ? undefined : a},
  minimalni_cena_drazby:{type: String,set: a => a === '' ? undefined : a},
  mena: {type: String,set: a => a === '' ? undefined : a},
  jednotka: {type: String,set: a => a === '' ? undefined : a},
  cenakjednani: {type: Boolean,set: a => a === '' ? undefined : a},
  poznamkakcene: {type: String,set: a => a === '' ? undefined : a},
  naklady: {type: String,set: a => a === '' ? undefined : a},
  anuita: {type: String,set: a => a === '' ? undefined : a},
  procento: {type: String,set: a => a === '' ? undefined : a},
  sporeni: {type: String,set: a => a === '' ? undefined : a},
  vlastnictvi: {type: String,set: a => a === '' ? undefined : a},
  misto_konani: {type: String,set: a => a === '' ? undefined : a},
  minimalni_prihoz: {type: String,set: a => a === '' ? undefined : a},
  drazebni_jistina: {type: String,set: a => a === '' ? undefined : a},
  odhadni_cena: {type: String,set: a => a === '' ? undefined : a},
  vyvolavaci_cena: {type: String,set: a => a === '' ? undefined : a},
  datum_a_cas_konani: {type: String,set: a => a === '' ? undefined : a},
  datum_a_cas_1_prohlidky: {type: String,set: a => a === '' ? undefined : a},
  datum_a_cas_2_prohlidky: {type: String,set: a => a === '' ? undefined : a},
  stavbu: {type: String,set: a => a === '' ? undefined : a},
  stav: {type: String,set: a => a === '' ? undefined : a},
  typ_bytu: {type: String,set: a => a === '' ? undefined : a},
  pocet_podlazi: {type: String,set: a => a === '' ? undefined : a},
  pocet_podzemnich_podlazi: {type: String,set: a => a === '' ? undefined : a},
  umisteni_podlazi: {type: String,set: a => a === '' ? undefined : a},
  bezbarierovy_pristup: {type: String,set: a => a === '' ? undefined : a},
  okolni_zastavba: {type: String,set: a => a === '' ? undefined : a},
  umisteni: {type: String,set: a => a === '' ? undefined : a},
  ochrana: {type: String,set: a => a === '' ? undefined : a},
  trida_energeticke_narocnosti: {type: String,set: a => a === '' ? undefined : a},
  ukazatel_energeticke_narocnosti: {type: String,set: a => a === '' ? undefined : a},
 
  podle_vyhlasky: {type: String,set: a => a === '' ? undefined : a},
  plochy_uzitna: {type: String,set: a => a === '' ? undefined : a},
  plochy_zastavena: {type: String,set: a => a === '' ? undefined : a},
  plochy_podlahov: {type: String,set: a => a === '' ? undefined : a},
  plochy_zahrady: {type: String,set: a => a === '' ? undefined : a},
  balkon: {type: String,set: a => a === '' ? undefined : a},
  lodzie: {type: String,set: a => a === '' ? undefined : a},
  terasa: {type: String,set: a => a === '' ? undefined : a},
  sklep: {type: String,set: a => a === '' ? undefined : a},
  bazen: {type: String,set: a => a === '' ? undefined : a},
  garaz: {type: String,set: a => a === '' ? undefined : a},
  parkovaci_stani: {type: String,set: a => a === '' ? undefined : a},
  datum_prodej: {type: String,set: a => a === '' ? undefined : a},
  datum_zahajeni_vystavby: {type: String,set: a => a === '' ? undefined : a},
  datum_prohlidka_od: {type: String,set: a => a === '' ? undefined : a},
  datum_prohlidka_do: {type: String,set: a => a === '' ? undefined : a},
  datum_nastehovani:{type: String,set: a => a === '' ? undefined : a},
  datum_ukonceni_vystavby: {type: String,set: a => a === '' ? undefined : a},
  rok_vystavby: {type: String,set: a => a === '' ? undefined : a},
  rok_rekonstrukce: {type: String,set: a => a === '' ? undefined : a},
  rok_kolaudace: {type: String,set: a => a === '' ? undefined : a},
  zarizeno: {type: String,set: a => a === '' ? undefined : a},
  klientska_URL_inzeratu: {type: String,set: a => a === '' ? undefined : a},
  zdroj_vody: [{type: Boolean,set: a => a === '' ? undefined : a}],
  typ_stavby: {type: String,set: a => a === '' ? undefined : a},
  typ_objektu: {type: String,set: a => a === '' ? undefined : a},
  pudni: {type: Boolean,set: a => a === '' ? undefined : a},
  image :[{type: String,required: true,set: a => a === '' ? undefined : a}],
  energeticka_narocnostfile:[{type: String,required: true,set: a => a === '' ? undefined : a}],
  drazebni_vyhlaska:[{type: String,required: true,set: a => a === '' ? undefined : a}],
  posudek_znalce:[{type: String,required: true,set: a => a === '' ? undefined : a}],
  doprava:[{type: String}],
  elektrina:[{type: String}],
  telekomunikace:[{type: String}],
  prijezdova_komunikace:[{type: String}],
  typ_odpadu:[{type: String}],
  rozvod_plynu:[{type: String}],
  rozvod_topeni:[{type: String}],
  zdroj_vodyArray:[{type: String}],
  active:{type: String,set: a => a === '' ? undefined : a},
  
  },
 
    { timestamps: true },
)


 





// Creating model objects
NemovitostSchema.plugin(mongoosePaginate);
// declare a mongoose document based on a Typescript interface representing your schema


const Nemovitost = mongoose.model("Nemovitost", NemovitostSchema);



module.exports = Nemovitost;