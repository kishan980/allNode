const express = require("express");
const BlogController = require("./../controller/blogController");
let setRouter = (app) =>{
    //var hello = (req,res)=> res.send("hello");
    app.get("/hello", BlogController.hello);
    // app.get("/hello", hello);

    //var printData = (req, res) => res.send("dataPrint");
    app.get("/print", BlogController.printData);
    // app.get("/print", printData);

    app.get("/test/route/:params1/:paarsm2", BlogController.testQuery);
    app.get("/test", BlogController.testQuery);
}

module.exports ={
    setRouter:setRouter
}