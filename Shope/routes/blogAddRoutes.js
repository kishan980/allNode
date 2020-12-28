const express = require("express");
const blogAddController = require("./../controller/BlogAddController");
const appConfig = require("./../conFigApp/confing");

let setRouter = (app) =>{
    let baseUrl = appConfig.apiVersion+'/blogAdd';
    app.get(baseUrl+'/getAllBlog', blogAddController.getAllBlog);
    app.get(baseUrl+'/viewByBlogId/:blogId', blogAddController.viewByBlogId)
    app.post(baseUrl+'/created', blogAddController.createBlog);
    app.post(baseUrl+'/createdBlog', blogAddController.createdBlog);
    app.delete(baseUrl+'/:blogId/deleteBlog', blogAddController.deleteBlog);
    app.put(baseUrl+'/:blogId/editBlog', blogAddController.editBlog);
}

module.exports = {
    setRouter:setRouter
}