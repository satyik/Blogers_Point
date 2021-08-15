const { Router } = require('express');
const router = Router();
const mongoose=require('mongoose')
var article = require("../models/article");
var User = require("../models/User");


router.get("/:id", function(req, res) {
    User.findById(req.params.id, function(err, foundUser){
       if(err){
           req.flash("error", "Something went wrong");
           res.redirect("/");
       } else {
           article.find().where('author.id').equals(foundUser._id).exec(function(err, foodFound){
               if(err) {
                   req.flash("error", "Something went wrong...");
                   res.redirect("/");
               } else {
                   res.render('author', {user: foundUser, article: foodFound});
               }
           })
       }
    }); 
 });




module.exports = router;