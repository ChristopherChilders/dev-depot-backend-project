require('dotenv').config();

// app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const setupAuth = require('./auth');
const es6Renderer = require('express-es6-template-engine');

// setupAuth(app);

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello There!</h1>
    `)
});

app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});

