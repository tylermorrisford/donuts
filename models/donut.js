const orm = require("../config/orm");

// create the code that will call the ORM functions using donut specific input for the ORM

var donut = {
    selectAll: function(cb) {
        orm.selectAll('donuts', function(res){
            cb(res);
        })
    }
}
// form allows user to add a donut with button to devour
// donut (not yet devoured) displays with id and button
// clicking the button adds donut to devoured


module.exports = donut;