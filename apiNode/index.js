const express = require("express");
const appConfig = require('./config/appConfig');
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");

let routesPath ='./routes';
fs.readdirSync(routesPath).forEach(function(file){
    if(~file.indexOf('.js')){
        let route =require(routesPath+'/'+ file);
        console.log(routesPath+'/'+file);
        route.setRouter(app);
    }
})

// let helloData = (req,res)=>res.send("kishan");

// app.get("/kishan", helloData);

app.get("/hello", (req,res) =>{
    res.send("hello");
});

app.listen(appConfig.port, ()=>{
    console.log("server is a runing 1452")
    let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser:true,useUnifiedTopology:true});
});

mongoose.connection.on("error", function(err){
    console.log("Database Connection Error");
    console.log(err);
});

mongoose.connection.on("open", function(err){
    if(err){
        console.log("databse error");
        console.log(err);
    } else {
        console.log("databse connection open success");
    }
})