const orm = require("../config/orm");
const burger = {
    all: callback => {
        orm.selectAll("burgers", res => {
            callback(res);
        })
    },
    insert: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, res => {
            callback(res);
        });
    },
    update: (objColVals, condition, callback) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            callback(res);
        })
    }
    // , delete: function (condition, cb) {
    //     orm.delete("cats", condition, function (res) {
    //         cb(res);
    //     });
    // }
}
module.exports = burger;