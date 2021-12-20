const db = require("./connection.js");

module.exports = class Data {
    static getdata(res) {
        const sql = "SELECT * FROM todo";
        db.query(sql, function(err, results) {
            if (err) {
                throw err;
            }
            res.end(JSON.stringify(results));
        });
    }
}