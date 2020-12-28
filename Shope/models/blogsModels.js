const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogSchema = new Schema({

        blogId:{
            type:String,
            default:'',
            required:true
        },
        title:{
            type:String,
            default:'',
            required:true
        },
        description:{
            type:String,
            default:'',
            required:true
        },
        bodyHtml:{
            type:String,
            default:'',
            required:true
        },
        views:{
            type:String,
            default:0,
            required:true
        },
        isPuslished:{
            type:Boolean,
            default:'',
            required:true
        },
        category:{
            type:String,
            default:'',
            required:true
        },
        author:{
            type:String,
            default:'',
            required:true
        },
        tags:[],
        created:{
            type:Date,
            default:Date.now,
            required:true
        },
        lastModified:{
            type:String,
            default:Date.now,
            required:true
        }
})

mongoose.model("BlogCollection", blogSchema);