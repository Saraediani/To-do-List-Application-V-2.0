const project = require("../model/projectsModel.js");
const { getData } = require("../helpers/hepler.js")

exports.getProjects = async(req, res) => {
    try {
        const projects = await project.getAll();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(projects));
    } catch (err) {
        throw err;
    }
}

exports.getProject = async(req, res) => {
    let id = req.url.split("/")[3];
    try {
        const projects = await project.getById(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(projects));
    } catch (err) {
        throw err;
    }
}

exports.createProject = async(req, res) => {
    try {
        const data = await getData(req);
        const newprojects = await project.createProject(data);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(newprojects));
    } catch (error) {
        console.log(error);
    }
}


exports.updateProject = async(req, res) => {
    let id = req.url.split("/")[3];

    try {
        const data = await getData(req);
        const updateprojects = await project.updateProject(data, id);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(updateprojects));
    } catch (error) {
        console.log(error);
    }
}


exports.deleteProject = async(req, res) => {
        let id = req.url.split("/")[3];
        try {
            const projects = await project.deleteProject(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(projects));
        } catch (err) {
            throw err;
        }
    }
    // module.exports = {
    //     getprojects,
    //     getById,
    //     createproject,
    //     updateproject,
    //     deleteproject,

// };