const express = require("express");
const router = express.Router();
router.get('/',function(req,res){
    var out = `<h2>Welcome to course section</h2>`;
    out +=`<a href="/course/andoird_tutorial ">Android Tutorial</a>`;
    out +=`<a href="/course/express_tutorial">Express Tutorial</a>`;
    out +=`<a href="/course/mogodb_tutorial">MogoDB Tutorial</a><br>`;
    res.send(out);
});
router.get('/andoird_tutorial',function(req,res){
    var out = `<h2>Welcome to course section andoird_tutorial</h2>`;
    out +=`<a href="/course/andoird_tutorial ">Android Tutorial</a>`;
    out +=`<a href="/course/express_tutorial">Express Tutorial</a>`;
    out +=`<a href="/course/mogodb_tutorial">MogoDB Tutorial</a><br>`;
    res.send(out);
});
router.get('/express_tutorial',function(req,res){
    var out = `<h2>Welcome to course section express_tutorial</h2>`;
    out +=`<a href="/course/andoird_tutorial ">Android Tutorial</a>`;
    out +=`<a href="/course/express_tutorial">Express Tutorial</a>`;
    out +=`<a href="/course/mogodb_tutorial">MogoDB Tutorial</a><br>`;
    res.send(out);
});
router.get('/mogodb_tutorial',function(req,res){
    var out = `<h2>Welcome to course section mogodb_tutorial</h2>`;
    out +=`<a href="/course/andoird_tutorial ">Android Tutorial</a>`;
    out +=`<a href="/course/express_tutorial">Express Tutorial</a>`;
    out +=`<a href="/course/mogodb_tutorial">MogoDB Tutorial</a>`;
    res.send(out);
});

module.exports = router;
