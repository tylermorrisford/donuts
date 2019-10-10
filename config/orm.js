const connection = require("./connection");

var orm = {
// selectAll()
    selectAll: function(table, cb){
        connection.query("SELECT * FROM " + table + ";", function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    // update()
    update: function(table, condition, cb){
        connection.query("UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";", function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    // insertOne()
    insertOne: function(table, newDonut, cb){
        connection.query("INSERT INTO " + table + " (donut_name) VALUES (" + newDonut + ");", function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
    

}


module.exports = orm;