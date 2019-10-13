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

router.put("/donut/update", function(req, res){ // use router.post  change html form to post method
    donut.update(req.body.donut_id, function(result){
        // use post with ajax in it
        // console.log('donut id: ' + req.body.donut_id);
        console.log(result);
        res.redirect("/")
    })
})

router.post("/donut/create", function(req, res){
    donut.insert(req.body.donut_name, function(result){
        console.log(result);
        res.redirect("/");
    })
})

module.exports = router;