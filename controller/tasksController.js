const Task = require("../model/tasksModel.js");

exports.getTasks = async(req, res) => {
    try {
        const task = await Task.getAll();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(task));
    } catch (err) {
        throw err;
    }
}

exports.getTask = async(req, res) => {
    let id = req.url.split("/")[3];
    console.log(id);
}

exports.createTask = async(req, res) => {
    console.log(
        "createTask"
    );
}

exports.updateTask = async(req, res) => {
    let id = req.url.split("/")[3];

    console.log(id);
}

exports.deleteTask = async(req, res) => {
    let id = req.url.split("/")[3];
    console.log(id);
}