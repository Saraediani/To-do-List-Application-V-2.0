const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
})
server.listen(port, () => {
    console.log(`app is live ${port}`);
});

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
db.end((err) => {

})