const express = require("express");
const appConfig = require("./appconfig/appconfig");
const app = express();
const fs = require('fs');

let routePath = './routes';
fs.readdirSync(routePath).forEach(function(file){
    if(~file.indexOf('.js')){
        console.log(routePath +'/'+ file);
        let route = require(routePath+'/'+ file);
        route.setRoutes(app);
    }
})

let modelsPath = "./models";
fs.readdirSync(modelsPath).forEach(function(file){
    console.log(modelsPath+'/'+file);
    if(~file.indexOf('.js'))
    require(modelsPath +'/'+ file);
})
// app.get("/hello", (req,res) =>{
//     console.log("hiii");
//     res.send("hii")
// });

// app.get("/printData", (req,res)=>{
//     console.log("printData");
//     res.send("printData");
// })



app.listen(appConfig.port, ()=>{
    console.log("3002 is lisnig");
})