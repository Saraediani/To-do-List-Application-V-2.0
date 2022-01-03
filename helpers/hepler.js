function getData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';

            req.on('data', (chunk) => {
                body = JSON.parse(chunk)
            });

            req.on('end', () => {
                resolve(body);
            });
        } catch (error) {
            reject(err);
        }
    });
}
module.exports = {
    getData,
};