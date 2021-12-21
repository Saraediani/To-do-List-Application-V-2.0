const http = require('http');
// const Todos = require("./controller");
const { getTasks, getTask } = require("./controller/tasksController.js");
const port = 8080;
const server = http.createServer((req, res) => {
    if (req.url === "/api/todo" && req.method === "GET") {
        getTasks(req, res);
    } else if (req.url.match(/^\/api\/todo\/\d+/) && req.method === "GET") {
        getTask(req, res);
    } else if (req.url === "/api/todo" && req.method === "POST") {
        createTask(req, res);
    } else if (req.url.match(/^\/api\/todo\/\d+/) && req.method === "PATCH") {
        updateTask(req, res);
    } else if (req.url.match(/^\/api\/todo\/\d+/) && req.method === "DELETE") {
        deleteTask(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
})

server.listen(port, () => {
    console.log(`app is live ${port}`);
});