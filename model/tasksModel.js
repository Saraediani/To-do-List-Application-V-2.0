const { db } = require("../connection.js");

function getAll() {
    // console.log(db);
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM todo";
        db.query(sql, function(err, tasks) {
            if (err) {
                throw err;
            }
            resolve(tasks);
        });
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM todo WHERE  id = ${id}`;
        db.query(sql, function(err, tasks) {
            if (err) {
                throw err;
            }
            resolve(tasks);
        });
    });
}

function deleteTask(id) {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM todo WHERE  id = ${id}`;
        db.query(sql, function(err, tasks) {
            if (err) {
                throw err;
            }
            resolve(tasks);
        });
    });
}

function createTask(data) {
    return new Promise((resolve, reject) => {
        const newTask = {...data };
        const sql = `INSERT INTO todo (title, description, completed, project_id) VALUES ('${data.title}','${data.description}','${data.completed}','${data.project_id}')`;
        db.query(sql, function(err, tasks) {
            if (err) {
                throw err;
            }
            resolve(newTask);

        });
    });
}

function updateTask(data, id) {
    return new Promise((resolve, reject) => {
        const newTask = {...data };
        const sql = `UPDATE  todo SET  title='${data.title}', description='${data.description}', completed='${data.completed}', project_id='${data.project_id}' WHERE id= ${id} `;
        db.query(sql, function(err, tasks) {
            if (err) {
                throw err;
            }
            resolve(newTask);
        });
    });
}


module.exports = {
    getAll,
    getById,
    createTask,
    updateTask,
    deleteTask,

};