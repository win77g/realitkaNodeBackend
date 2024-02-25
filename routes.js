const express = require("express");
const NemovitostModel = require("./models/modelNemovitost");
const MaklereModel = require("./models/modelMaklere");
const SliderModel = require("./models/modelSlider");
const CardCompanyModel = require("./models/modelCardCompany");
const OnasModel = require("./models/modelOnas");
const AktualModel = require("./models/modelAktual");
const SlujbyModel = require("./models/modelSlujby");
const CertifikatModel = require("./models/modelCertifikat");
const ReferenceModel = require("./models/modelReference");
// const ClientBoxModel = require("./models/modelClientBox");
// const ClientEmailModel = require("./models/modelClientEmail");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs');
const app = express();
const mongoose = require("mongoose");

// var cors = require('cors')

// var corsOptions = {
//   origin: 'http://localhost:8100',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// filter 1156

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/main.html");
  });

// serve your css as static
app.use(express.static(__dirname));  
app.get("/privacy_policy", async (req, res) => {
    // res.json({ message: "Privacy Policy." });
    res.sendFile(__dirname + "/privacy_policy.html");
  
  });
  app.get("/delete_data", async (req, res) => {
    // res.json({ message: "Privacy Policy." });
    res.sendFile(__dirname + "/delete_data.html");
  //   fs.readFile('./privacy_policy.html', null, function (error, data) {
  //     if (error) {
  //         // response.writeHead(404);
  //         respone.write('Whoops! File not found!');
  //     } else {
  //         response.write(data);
  //     }
  //     response.end();
  // });
  });

//////////////////////////////////Nemovitost//////////////////////////////////////////////////////////////////////////////////

app.post("/add_Nemovitost",async (request, response) => {
  const data = new NemovitostModel(request.body);
console.log('/add_Actors',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_NemovitostAll", async (request, response) => {
  console.log(request.query)
    // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } }
    const data = await NemovitostModel.find().limit(20).sort({createdAt:-1});
    console.log(data)
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Nemovitost", async (request, response) => {
  console.log(request.query)
    // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } }
    const data = await NemovitostModel.find(request.query).limit(20).sort({createdAt:-1});
    console.log('80')
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Nemovitost/:id", async (request, response) => {
  const { id } = request.params;
  
  const data = await NemovitostModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Nemovitost/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('99',id,request.body)
  
  try {
      data = await NemovitostModel.findByIdAndUpdate(id,
      
      {$set:request.body}

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Nemovitost/:id", async (request, response) => {
  try {
    console.log('118',request.params.id)
    const data = await NemovitostModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/filtering_Nemovitost/", async (request, response) => {
  const page = request.query.page;
  const sort = request.query.sort;
  const limit =  request.query.limit
  const skip = page * limit
 
  console.log(request.query)
  const notebook = await NemovitostModel.find(request.query).sort(sort).limit(limit).skip(skip);
  console.log(notebook)
  try {
    // response.json({q});
    response.send(notebook);
  } catch (error) {
    response.status(500).send(error);
  }
  

});
///////////////////////////////////Maklere///////////////////////////////////////////////////////////////////
app.post("/add_Maklere",async (request, response) => {
  console.log('125',request.body)
  const data = new MaklereModel(request.body);
  console.log('127',data)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Maklere", async (request, response) => {
  console.log(request.params)
  const data = await MaklereModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Maklere/:id", async (request, response) => {

  const { id } = request.params;
  console.log(id)
  const data = await MaklereModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Maklere/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('130',id,request.body)
  
  try {
    const data = await MaklereModel.findByIdAndUpdate(id,{
      
      $set:request.body
      
  },{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Maklere/:id", async (request, response) => {
  try {
    console.log('147',request.params.id)
    const data= await MaklereModel.findByIdAndDelete(request.params.id,{new: true});

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Slider///////////////////////////////////////////////////////////////////
app.post("/add_Slider",async (request, response) => {
  const data = new SliderModel(request.body);
console.log('/add_Slider',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Slider", async (request, response) => {
  const category = await SliderModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.delete("/delete_Slider/:id", async (request, response) => {
  console.log(request.params.id)
  try {
    const processor= await SliderModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////CardCompany///////////////////////////////////////////////////////////////////
app.post("/add_CardCompany",async (request, response) => {
  console.log('207',request.body)
  const data = new CardCompanyModel(request.body);
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_CardCompany", async (request, response) => {
  const category = await CardCompanyModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_CardCompany/:id", async (request, response) => {
  const { id } = request.params;
  const data = await CardCompanyModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_CardCompany/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('238',id,request.body)
  
  try {
    const data = await CardCompanyModel.findByIdAndUpdate(id,
      {
        $set:request.body
      }

    ,{new: true});
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_CardCompany/:id", async (request, response) => {
  try {
    const processor= await CardCompanyModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
/////////////////////////////////Onas///////////////////////////////////////////////////////////////////
app.post("/add_Onas",async (request, response) => {
  const category = new OnasModel(request.body);
  console.log('268',category)
  try {
    await category.save();
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Onas", async (request, response) => {
  
  const category = await OnasModel.find({});
  
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Onas/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('303',id,request.body)
  
  try {
    const product = await OnasModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Onas/:id", async (request, response) => {
  try {
    const processor= await OnasModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Aktual///////////////////////////////////////////////////////////////////
app.post("/add_Aktual",async (request, response) => {
  const data = new AktualModel(request.body);
    console.log('331',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Aktual", async (request, response) => {
  const data = await AktualModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Aktual/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('369',id,request.body)
  
  try {
    const data = await AktualModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Aktual/:id", async (request, response) => {
  try {
    const data = await AktualModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Slujby///////////////////////////////////////////////////////////////////
app.post("/add_Sluzby",async (request, response) => {
  const category = new SlujbyModel(request.body);
    console.log('397',request.body)
  try {
    await category.save();
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Sluzby", async (request, response) => {
  const category = await SlujbyModel.find({});
  console.log('407')
  try {
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Sluzby/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('417',id,request.body)
  
  try {
    const product = await SlujbyModel.findByIdAndUpdate(id,
      
      {$set:request.body}

    ,{new: true});//respons update data
    //response.send(product);
    response.json(product);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Sluzby/:id", async (request, response) => {
  try {
    const data = await SlujbyModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Sluzby/:id", async (request, response) => {
  const { id } = request.params;
  const data = await SlujbyModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Certifikat///////////////////////////////////////////////////////////////////
app.post("/add_Certifikat",async (request, response) => {
  const data = new CertifikatModel(request.body);
    console.log('437',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Certifikat", async (request, response) => {
  const data = await CertifikatModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Certifikat/:id", async (request, response) => {
  const { id } = request.params;
  const data = await CertifikatModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Certifikat/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log(id,request.body)
  
  try {
    const data = await CertifikatModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Certifikat/:id", async (request, response) => {
  try {
    const data = await CertifikatModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Reference///////////////////////////////////////////////////////////////////
app.post("/add_Reference",async (request, response) => {
  const data = new ReferenceModel(request.body);
    console.log('513',request.body)
  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}); 
app.get("/get_Reference", async (request, response) => {
  const data = await ReferenceModel.find({status:'aktiv'});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_ReferenceAdmin", async (request, response) => {
  const data = await ReferenceModel.find({});
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Reference/:id", async (request, response) => {
  const { id } = request.params;
  console.log('532',request.params)
  const data = await ReferenceModel.findById(id);
  
  try {
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Reference/:id",async (request, response) => {
  const { id } = request.params;
  
  console.log('369',id,request.body)
  
  try {
    const data = await ReferenceModel.findByIdAndUpdate(id,
      
      { $set:request.body }

    ,{new: true});//respons update data
    //response.send(product);
    response.json(data);
  }  
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Reference/:id", async (request, response) => {
  try {
    const data = await ReferenceModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////ImageService///////////////////////////////////////////////////////////////////
// app.post("/add_ImageService",async (request, response) => {
//   console.log('405',request.body)
//   const data = new ImageServiceModel(request.body);
    
//   try {
//     await data.save();
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// }); 
// app.get("/get_ImageService", async (request, response) => {
//   const data = await ImageServiceModel.find({});
  
//   try {
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.delete("/delete_ImageService/:id", async (request, response) => {
//   try {
//     const data = await ImageServiceModel.findByIdAndDelete(request.params.id);

//     if (!data) response.status(404).send("No item found");
//     response.status(200).send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

///////////////////////////////////////Email//////////////////////////////////////////////////////////////
// app.post("/createEmailRegisterClient",async (request, response) => {
//   const clientEmail = new ClientEmailModel(request.body);
//   console.log('clientEmail',request.body)
//   try {
//     await clientEmail.save();
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/getEmail/:email', async (request, response) => {
//   console.log(request.params) 
//   const clientEmail = await ClientEmailModel.find({'email':request.params.email});
//   try {
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.delete("/delete_email/:email", async (request, response) => {
//   console.log('445,',request.query.id)
 
//   const clientEmail = await ClientEmailModel.deleteMany({'email':request.params.email});
//   try {
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
////////////////////////////////////////ClientBox/////////////////////////////////////////////////////////////
// app.post("/createClientBox",async (request, response) => {
//   const ClientBox = new ClientBoxModel(request.body);
//   // console.log('clientEmail',request.body)
//   try {
//     await ClientBox.save();
//     response.send(ClientBox);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/getClientBox/:firebaseId', async (request, response) => {
//   const clientEmail = await  ClientBoxModel.find({'_uidFirebase':request.params.firebaseId});
//   try {
//     response.send(clientEmail);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.put("/updateClientBox/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('477',id,request.body)
  
//   try {
//     const ClientBox = await ClientBoxModel.findByIdAndUpdate(id,
      
//       {_profil:request.body}

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(ClientBox);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.put("/updateClientBoxAddAnimals/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('563',id,request.body)
  
//   try {
//     const ClientBox = await ClientBoxModel.updateOne({_id:id},
      
//      { $push:{_animals:{$each:[request.body]}}}

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(ClientBox);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.put("/updateClientBoxUpdateAnimals/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('581',id,request.body)
  
//   try {
//     const ClientBox = await ClientBoxModel.findByIdAndUpdate({_id:id},
      
//      { _animals:request.body}

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(ClientBox);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.put("/updateClientBoxUpdateProfile/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('599',id,request.body)
  
//   try {
//     const ClientBox = await ClientBoxModel.findByIdAndUpdate(id,
      
//      {_profil:request.body}

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(ClientBox);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////KeyWords/////////////////////////////////////////////////////////////
// app.post("/add_KeyWords",async (request, response) => {
//   const category = new KeyWordsModel(request.body);
//     console.log('363',request.body)
//   try {
//     await category.save();
//     response.send(category);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// }); 
// app.get("/get_KeyWords", async (request, response) => {
//   const category = await KeyWordsModel.find({});
  
//   try {
//     response.send(category);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.put("/update_KeyWords/:id",async (request, response) => {
//   const { id } = request.params;
  
//   console.log('383',id,request.body)
  
//   try {
//     const product = await KeyWordsModel.findByIdAndUpdate(id,
      
//       {
//         title: request.body.title,
//         slug: request.body.slug
//         }

//     ,{new: true});//respons update data
//     //response.send(product);
//     response.json(product);
//   }  
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.delete("/delete_KeyWords/:id", async (request, response) => {
//   try {
//     const processor= await KeyWordsModel.findByIdAndDelete(request.params.id);

//     if (!processor) response.status(404).send("No item found");
//     response.status(200).send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////







module.exports = app;