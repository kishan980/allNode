const express = require("express");
const appConfig = require('./conFigApp/confing');
const fs = require('fs');
const mongoose = require("mongoose");
const cookieParse = require("cookie-parser");
const bodyParse = require("body-parser");
const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(cookieParse());

let routerPath = './routes';
fs.readdirSync(routerPath).forEach(function(file){
    if(~file.indexOf('.js')){
        console.log(routerPath +'/'+file);
        let route = require(routerPath+ '/'+ file);
        route.setRouter(app);
    }
})

let modelusPath = './models';
 fs.readdirSync(modelusPath).forEach(function(file){
     if(~file.indexOf('.js')) 
     console.log(modelusPath +'/'+ file);
     require(modelusPath +'/'+ file);
 })

// var helloData = (req,res) => res.send("Hello world");
// app.get("/hello", helloData);

// var printData = (req,res) => res.send("printData");
// app.get("/printData", printData);

// app.listen(3000, ()=> console.log("Exmaple  app  listening on port 30000!"))
 app.listen(appConfig.port, ()=>{
    console.log("Exmaple  app  listening on port 3001!");
    let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser:true, useUnifiedTopology:true});
 })

 mongoose.connection.on("error", function(err) {
     console.log("database connection Error");
     console.log(err);
 }) 

 mongoose.connection.on('open', function(err) {
     if(err){
            console.log("database error")
            console.log(err);
     } else {
        console.log("databae connection Open Success");
     }
 })