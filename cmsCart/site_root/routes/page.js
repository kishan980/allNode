var express = require("express");
var router = express.Router();

router.get('/' ,function (req,res) {
    //res.send("hello");
    res.render('index',{
        title:"Home"
    });

})

router.get('/test', function(req,res){
    res.send("user site");
});
module.exports = router;