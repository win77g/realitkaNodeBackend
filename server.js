require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let port = process.env.PORT;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader( 'Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
  next();
});
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
console.log(process.env.MONGO_URI)
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useFindAndModify: false
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
    
    
app.listen(port, () => {
      console.log("Server is running at port ",port);
    });

