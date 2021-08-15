var express = require('express');
var router = express.Router();
var article = require("../models/article");
/* GET home page. */
router.get("/", function(req, res) {
  article.find({}, function (err, article) {
    res.render("home", { article: article });
});
});

module.exports = router;


