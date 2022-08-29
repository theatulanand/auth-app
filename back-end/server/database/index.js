const mongoose = require("mongoose");

async function connectDatabase() {
    return new Promise((resolve, reject) => {
        const url = `mongodb://0.0.0.0:27017/auth-app`;
        mongoose.connect(url, (err) => {
            if (err) {
                console.log(err);
                return reject(err)
            }

            console.log("Database connected");
            return resolve()
        })
    })
}

module.exports = connectDatabase;