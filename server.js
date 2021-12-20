const http = require('http');
// const Todos = require("./controller");
const todo = require('./data');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todo));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
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