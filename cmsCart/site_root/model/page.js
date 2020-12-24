var mongoose = require("mongoose");
var pageSchema = mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    sorting:{
        type:Number
    }

});
var page = module.exports = mongoose.model('page', pageSchema);