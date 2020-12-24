const express = require("express");
const blogsController = require("./../controller/blogController");

let setRouter = (app) =>{

    // helloData = (req,res) =>res.send("kishan");
    // app.get("/helloKishan",helloData);
    // newdata = (req,res)=>res.send("kiss");
    // app.get("/kiss", newdata);
    app.get("/helloDemo", blogsController.helloData);
    app.get("/data", blogsController.numberData);
}
module.exports = {
        setRouter:setRouter
}