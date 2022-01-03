const { db } = require("../connection.js");

function getAll() {
    // console.log(db);
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM projects";
        db.query(sql, function(err, projects) {
            if (err) {
                throw err;
            }
            resolve(projects);
        });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM projects WHERE  id = ${id}`;
        db.query(sql, function(err, projects) {
            if (err) {
                throw err;
            }
            resolve(projects);
        });
    });
}

function deleteProject(id) {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM projects WHERE  id = ${id}`;
        db.query(sql, function(err, projects) {
            if (err) {
                throw err;
            }
            resolve(projects);
        });
    });
}

function createProject(data) {
    return new Promise((resolve, reject) => {
        const newProject = {...data };
        const sql = `INSERT INTO projects (title, description, completed) VALUES ('${data.title}','${data.description}','${data.completed}')`;
        db.query(sql, function(err, projects) {
            if (err) {
                throw err;
            }
            resolve(newProject);

        });
    });
}

function updateProject(data, id) {
    return new Promise((resolve, reject) => {
        const newProject = {...data };
        const sql = `UPDATE  projects SET  title='${data.title}', description='${data.description}', completed='${data.completed}' WHERE id= ${id} `;
        db.query(sql, function(err, projects) {
            if (err) {
                throw err;
            }
            resolve(newProject);
        });
    });
}


module.exports = {
    getAll,
    getById,
    createProject,
    updateProject,
    deleteProject,

};