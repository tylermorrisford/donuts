var express = require('express');
var router = express.Router();
var donut = require('../models/donut');


// routes
router.get("/", function(req, res){
    donut.selectAll(function(donut_data){
        console.log(donut_data);
        res.render("index", {donut_data});
    })
})

router.put("/donuts/update", function(req, res){
    donut.update(req.body.donut_id), function(result){
        console.log(result);
        res.redirect("/");
    }
})

router.post("/burgers/create", function(req, res){
    donut.insert(req.body.donut_name, function(result){
        console.log(result);
        res.redirect("/");
    })
})

module.exports = router;