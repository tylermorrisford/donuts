const connection = require("./connection");

var orm = {
// selectAll()
    selectAll: function(table, cb){
        connection.query("SELECT * FROM " + table + ";", function(err, result){
            if (err) throw err;
            cb(result);
        })
    }    
    
    // insertOne()
    // updateOne()
}


module.exports = orm;