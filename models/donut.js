const orm = require("../config/orm");

// create the code that will call the ORM functions using donut specific input for the ORM

var donut = {
    selectAll: function (cb) {
        orm.selectAll('donuts', function (res) {
            cb(res);
        })
    },

    update: function (id, cb) {
        orm.update('donuts', id, cb);
    },

    insert: function (name, cb) {
        orm.insert('donuts', name, cb);
    }

}

module.exports = donut;