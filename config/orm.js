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
            if (err) throw err;
            cb(result);
            // console.log('if cb runs you see me');
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
