var express = require("express");
var router = express.Router();
router.get("/test", function(req,res) {
    res.render('index',{
        title:"Home"
    })
    res.send("Admin area");
});


module.exports = router;