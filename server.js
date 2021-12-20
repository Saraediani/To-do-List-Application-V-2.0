const http = require('http');
// const Todos = require("./controller");
const Data = require('./data');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === "/api/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        Data.getdata(res);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
})
server.listen(port, () => {
    console.log(`app is live ${port}`);
});