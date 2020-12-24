const mongoose = require("mongoose");
const schema = mongoose.schema;

let blogSchema = new schema({

    blogId:{
        type:String,
        unique:true
    },
    title:{
        type:String,
        default:''
    }

})