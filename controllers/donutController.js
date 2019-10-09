var express = require('express');
var router = express.Router();
var donut = require('../models/donut');


router.get("/", function(req, res){
    donut.selectAll(function(donut_data){
        console.log(donut_data);
        res.render("index");
    })
})
// routes



module.exports = router;