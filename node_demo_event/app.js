var express = require("express");
var app = express();
var events = require("events");

var eventEmiter = new events.EventEmitter();


eventEmiter.on('welcomeEmail', function(data){
        
		console.log("first listener was called");
		console.log("code to send welcome email will be written here");
		console.log("its supposed to send email to "+data.name+" whose email is "+data.email);
})

eventEmiter.on('someEvent', function(data){
    console.log("I am the first listener and i will print this to console");
});


eventEmiter.on("someEvent", function(data){
    console.log("i am the second listener");
})

eventEmiter.on("someEvent", function(data){
    console.log("i am third event listern");
})

eventEmiter.on("someEvent", function(data){
    console.log("i am fourth event listenig");
})


app.get('/singUp',  function(req, res) {
    var user ={ name:"kishanyadav", email:"kishany980@gmail.com"};
    eventEmiter.emit('welcomeEmail', user);
    res.send("hello kishan");
})

app.get('/', function(req,res)  {
    var someData ={'message':'hello world data send'}
    eventEmiter.emit("someEvent", someData);
    res.send(someData.message);
})

app.listen(30000, function(){
    console.log("Example App Listenig on Port 30000");
})