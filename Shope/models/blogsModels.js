const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogSchema = new Schema({

        blogId:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        },
        description:{
            type:String,
            default:''
        },
        bodyHtml:{
            type:String,
            default:''
        },
        views:{
            type:String,
            default:0
        },
        isPuslished:{
            type:Boolean,
            default:''
        },
        category:{
            type:String,
            default:''
        },
        author:{
            type:String,
            default:''
        },
        tags:[],
        created:{
            type:Date,
            default:Date.now
        },
        lastModified:{
            type:String,
            default:Date.now
        }
})

mongoose.model("BlogCollection", blogSchema);