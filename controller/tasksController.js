const Task = require("../model/tasksModel.js");
const { getData } = require("../helpers/hepler.js")

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
    try {
        const task = await Task.getById(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(task));
    } catch (err) {
        throw err;
    }
}

exports.createTask = async(req, res) => {
    try {
        const data = await getData(req);
        const newtask = await Task.createTask(data);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newtask));
    } catch (error) {
        console.log(error);
    }
}


exports.updateTask = async(req, res) => {
    let id = req.url.split("/")[3];

    try {
        const data = await getData(req);
        const updatetask = await Task.updateTask(data, id);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(updatetask));
    } catch (error) {
        console.log(error);
    }
}


exports.deleteTask = async(req, res) => {
        let id = req.url.split("/")[3];
        try {
            const task = await Task.deleteTask(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(task));
        } catch (err) {
            throw err;
        }
    }
    // module.exports = {
    //     getTasks,
    //     getById,
    //     createTask,
    //     updateTask,
    //     deleteTask,

// };