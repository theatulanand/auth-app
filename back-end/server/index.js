const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const connectDatabase = require("./database/index")
const { register, login, getLoggedUser } = require('./controllers/user');

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

app.use(cors());
app.use(express.json());
app.use(logger);

app.post('/register', register);
app.post('/login', login);
app.post('/getLoggedUser', getLoggedUser);

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log("Database Connected At PORT: 3001");
    })
}).catch((err) => {
    console.log("Error is", err);
})