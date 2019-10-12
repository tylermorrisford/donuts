const connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM " + table + ";", function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    update: function(table, condition, cb){
        connection.query("UPDATE " +table+" SET devoured=true WHERE id="+condition+";", function(err,result){    
            // console.log(result);
            if (err) throw err;
            cb(result);
            console.log('if you console log in a forest, and the trees are errors, does it even log?');
        })
    },
    insert: function(table, val, cb){
        connection.query("INSERT INTO "+table+" (donut_name) VALUES ('"+val+"');", function(err,result){    
            if (err) throw err;
            cb(result);
        })
    }

}


module.exports = orm;
