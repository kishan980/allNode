const express = require("express");
const app = express();
let hello = (req,res) => res.send("hello Data...");
app.get("/helloData", hello);

app.listen(30000, (req,res)=>{
   // res.send("yes i am run mode")
    console.log(" 30000 hii i am run mode listen");
});