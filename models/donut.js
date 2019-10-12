var orm = require("../config/orm.js");

var donut = {
    selectAll: function (cb) {
        orm.selectAll("donuts", function (res) {
            cb(res);
        })
    },

    update: function (id, cb) {
        console.log(id);
        console.log('this is undefined?' + cb);
        orm.update("donuts", id, cb);
    },

    insert: function (name, cb) {
        orm.insert("donuts", name, cb);
    }

}

module.exports = donut;