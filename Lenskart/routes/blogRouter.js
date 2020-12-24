const express = require('express');
const BlogController = require("./../controller/blogController");

let setRoutes = (app) =>{
    // app.get("/hello", (req,res) =>{
    //     console.log("hiii")
    //     res.send("hiii")
    // });
    // app.get("/data", (req,res)=>{
    //     console.log("data");
    //     res.send("data");
    // })
    app.get('/hello', BlogController.hello);
    app.get('/data', BlogController.data);
}

module.exports ={
    setRoutes:setRoutes
}