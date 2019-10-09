var express = require('express');
var router = express.Router();
// var donut = require('../models/donut');


router.get("/", function(req, res){
    res.render("index");
})
// routes




module.exports = router;