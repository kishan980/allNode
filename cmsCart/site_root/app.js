var express = require("express"),
 path    = require("path"),
 mongoose = require("mongoose"),
 config  = require("./config/db"),
 bodyParser = require("body-parser"),
 session = require('express-session'),
 ExpressValidator = require("express-validator");

    //connection Database
    // mongoose.connect("mongodb://localhost/cmscart");
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'), {useUnifiedTopology:true,useNewUrlParser:true});
db.once('opne', function(){
    console.log("Connection  to MongoDB...");
})

// init app
var app = express();
// View engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');

  //set pullic folder
app.set(express.static(path.join(__dirname,'public')));


  // bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
  //parse application/json
app.use(bodyParser.json());
app.use(ExpressValidator());

 // Express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

    // Express middale ware validatore
  app.use(ExpressValidator({

    errorFormatter: function(param, msg, value){
  
      var namespace = param.split('.'),
  
      root = namespace.shift(),
  
      formParam = root;

    while(namespace.length){
  
      formParam += '[' + namespace.shift() + ']';
    }
    return {
  
      param : formParam,
  
      msg : msg,
  
      value : value
  
    };
  
    }
  
  }));
  
  //Express messages middleware 

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

  // set Routes
  var pages = require('./routes/page.js');
  var adminPage = require("./routes/admin_page");
  app.use('/admin/pages', adminPage);
  app.use('/', pages);
  
    app.get('/', function(req,res){
      res.render('index',{
          title:'Home'
      });
      // res.send("working.....");
    });

  // server the start
var port =3000;
app.listen(port, function(){
    console.log("Server starteed on part"+port);
})