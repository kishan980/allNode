const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogsSchema = new  Schema({

        blogId:{
            type:String,
            unique:true
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
        ispublished:{
            type:String,
            default:''
        },
        category:{
            type:String,
            default:''
        },
        author:{
            type:String,
            default:""
        },
        tags:[],
        created:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }

})

mongoose.model('blogTable', blogsSchema);