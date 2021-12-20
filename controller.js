// Logic behind the functionalities
const data = require("./data");

class Controller {
    // getting all todos
    async getTodos() {
        // return all todos
        return new Promise((resolve, _) => resolve(data));
    }
}
module.exports = Controller;