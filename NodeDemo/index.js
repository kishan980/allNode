const express = require("express");
const app= express();
const course = require('./course');
app.use('/course',course);

app.get('/',function(req,res){
    res.send("Welcome To kishan yadav Study For node js");
});
// app.get('/',function(req,res){
//     res.send("hi");
// });

// app.get('/course',function(req,res){
//     res.send("hello andoid");
// })

// app.post('/andorid/',function(req,res){
//     res.send("hello andoid");
// })

// app.all('/post_demo',function(req,res){
//     res.send("hii all");
// })

app.get('/express',function(req,res){
    res.send("hello from express website");
})

app.get('/profile/:id',function(req,res){
    res.send("profile ID"+req.params.id);  
})

app.get('/:course_Name/coures/:id',function(req,res){
    res.send("course_name:"+req.params.course_Name+",ID:"+req.params.id);
});

app.get('/measseg/:phoneNumber/([0-9]{10})',function(req, res){
    res.send("measseg To"+ req.params.phoneNumber);
});
app.get('*', function(req,res){
    res.send("not found page");
});

app.listen('3000');