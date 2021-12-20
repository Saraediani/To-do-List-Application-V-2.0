const mysql = require('mysql2');


// create connection 
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_sql'

    })
    //connect to MySql
db.connect(err => {
    if (err) {
        throw err
    }
    console.log('MySql connectd')
})


module.exports = db