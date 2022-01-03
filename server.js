const http = require('http');
// const Todos = require("./controller");
const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("./controller/tasksController.js");
const {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
} = require("./controller/ProjectsController.js")
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


    }
    if (req.url === "/api/projects" && req.method === "GET") {
        getProjects(req, res);
    } else if (req.url.match(/^\/api\/Project\/\d+/) && req.method === "GET") {
        getProject(req, res);
    } else if (req.url === "/api/Project" && req.method === "POST") {
        createProject(req, res);
    } else if (req.url.match(/^\/api\/Project\/\d+/) && req.method === "PATCH") {
        updateProject(req, res);
    } else if (req.url.match(/^\/api\/Project\/\d+/) && req.method === "DELETE") {
        deleteProject(req, res);



    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }

})

server.listen(port, () => {
    console.log(`app is live ${port}`);
});