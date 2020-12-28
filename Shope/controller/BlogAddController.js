
const express = require("express");
const mongoose = require("mongoose");
const shortId = require("shortid");
const time  = require("./../library/timeLib");
const response = require("./../library/responseLib");
const logger   = require("./../library/loggerLib");
const check = require("./../library/checkLib");


const BlogModel = mongoose.model("BlogCollection");

let getAllBlog = (req,res) =>{
    BlogModel.find()
        .select("-__v, -_id")
        .lean()
        .exec((err, result)=>{
            if(err){
                console.log(err);
                // res.send(err);
                logger.error(err.message, "Blog Controller: getAllBlog");
                let apiResponse = response.generate(true, "Failed To find Blog Details",500,null);
                res.send(apiResponse);
            // } else if( result == undefined  || result == null || result == ""){
            }else if(check.isEmpty(result)){
                    console.log("no Blogs Found");
                    // res.send("no Blogs Found");
                    error.info("No Blog Found", "Blog Controller: getAllBlog");
                    let apiResponse = response.generate(true, "No Blog Found", 404, null);
                    res.send(apiResponse);
            } else {
                    // res.send(result);
                    let apiResponse = response.generate(false, "All Blog Details found", 200, result);
                    res.send(apiResponse);
            }
        });
}

let viewByBlogId = (req,res) =>{
    if(check.isEmpty(req.params.blogId)) {
        console.log("blogs id should be passed");
        let apiResponse = response.generate(true, "blogId is missing", 403, null);
        res.send(apiResponse);
    } else {
            BlogModel.findOne({"blogId": req.params.blogId}, (err, result)=>{
                if(err){
                    console.log("error is Occured");
                    logger.error(`error Occured ${err}`,"Database",10);
                    let apiResponse = response.generate(true, "Error is occured", 500, null);
                    res.send(apiResponse);
                    // res.send(err);
                } else if(check.isEmpty(result)) {
                    console.log("no found Blog");
                    let apiResponse = response.generate(true, "Not Found blog", 404, null);
                    res.send(apiResponse);
                    // res.send("no found Blog");

                } else {
                    logger.info("Blog found SuccessFully", "Blogcontroller:viewByBlogId");
                    let apiResponse =response.generate(true, "Blog found SuucessFully", 200,result);
                    res.send(apiResponse);
                    // res.send(result);
                }
            })
    }
}

let createBlog = (req,res) =>{
    var today = Date.now();
    let blogId = shortId.generate();

    let newBlog = new BlogModel({

        blogId:blogId,
        title: req.body.title,
        description:req.body.description,
        bodyHtml: req.body.bodyHTML,
        isPuslished: true,
        category:req.body.category,
        author:req.body.fullName,
        created:today,
        lastModified:today
    });

    let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '')? req.body.tags.split(','):[]
    newBlog.tags = tags

    newBlog.save((err, result) =>{
        if(err){
            console.log(err);
            // res.send(err);
            // let apiResponse = response.generate(true, "");
        } else {
            res.send(result);
        }
    })
}

let createdBlog = (req,res) =>{
    let blogCreationFunction = () =>{
        return new  Promise ((resolve,reject) =>{
            console.log(req.body);

            if(check.isEmpty(req.body.title) ||
                check.isEmpty(req.body.bodyHTML) ||
                check.isEmpty(req.body.category)){
            
                    console.log("403, forbidden request");
                    let apiResponse = response.generate(true, "required parameter is missing", 403, null);
                   reject(apiResponse);
            } else {
                    var today = Date.now();
                    let blogId = shortId.generate();

                    let newBlog = new BlogModel({
                        blogId: blogId,
                        title: req.body.title,
                        description: req.body.description,
                        bodyHtml: req.body.blogBody,
                        isPublished: true,
                        category: req.body.category,
                        author: req.user.fullName,
                        created: today,
                        lastModified: today
                    });
                    let tags = (req.body.tags !=undefined && req.body.tags != null && req.body.tags !='')? req.body.tags.split(','):[]
                    newBlog.tags =tags

                    newBlog.save((err, result) =>{
                        if(err){
                            console.log("error is Occured");
                            logger.error(`Error is Occured:${err}`, "Databse",10);
                            let apiResponse = response.generate(true, "Error is Occured", 500, null);
                            reject(apiResponse);
                        } else {
                            console.log("success in Blog Creation");
                            resolve(result);
                        }
                    })

                }
        });
    }

        blogCreationFunction()
            .then((result) =>{
                logger.info("SuccseFully Insert Blog", "blogController: createdBlog");
                let apiResponse = response.generate(false, "Blog is created SuccessFully", 200, result);
                res.send(apiResponse);
            })
            .catch((error) =>{
                console.log(error);
                res.send(error);
            })
}

let editBlog = (req,res) =>{
    let option = req.body;
    console.log(option);
    BlogModel.update({"blogId": req.params.blogId}, option, {multi:true}).exec((err, result) =>{
        if(err){
            console.log(err);
            res.send(err);
        } else if(result == undefined || result == null || result == ""){
            console.log("no blog Found");
            res.send("no blog Found");
        } else {
            res.send(result);
        }
    })
}

let deleteBlog = (req,res) =>{
    BlogModel.remove({"blogId": req.params.blogId}, (err, result)=>{
        if(err){
            console.log(err);
            res.send(err);
        } else if(result == undefined || result == null || result == "") {
            console.log("no blog found");
            res.send("no blog found");
        } else {
            res.send(result);
        }
    })
}

module.exports ={
    getAllBlog:getAllBlog,
    viewByBlogId:viewByBlogId,
    createBlog:createBlog,
    deleteBlog:deleteBlog,
    editBlog:editBlog,
    createdBlog:createdBlog

}