require('dotenv').config();


const express = require('express');
const app = express();
const PORT = process.env.PORT;
const es6Renderer = require('express-es6-template-engine');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const setupAuth = require('./auth');

// setupAuth(app);

app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views')

// app.use(express.urlencoded({ extended: true }));
app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET
}));


app.get('/', (req, res) => {
    res.send(`
    <h1>Hello There!</h1>
    `)
});





app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});

