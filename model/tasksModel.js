const { db } = require("../connection.js");

function getAll() {
    // console.log(db);
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM todo";
        db.query(sql, function(err, tasks) {
            if (err) {
                throw err;
            }
            resolve(tasks);
        });
    });
}


module.exports = {
    getAll,

};