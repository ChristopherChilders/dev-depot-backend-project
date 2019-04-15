//dotenv helps to hide sensitive information by utilizing a .env file.

//the module imports variables set in the file to use wherever 'dotenv' is required. 

//useful for hiding PORT number, session secret, database information, etc.

require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const es6Renderer = require('express-es6-template-engine');


const session = require('express-session');
const FileStore = require('session-file-store')(session);


app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }));
app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET
}));

// This is used to redirect user browser requests
const logInRouter = require('./routes/login');
app.use('/login', logInRouter);
const dashboardRouter = require('./routes/dashboard');
app.use('/dashboard', dashboardRouter);

const frameworksRouter = require('./routes/frameworks');
app.use('/frameworks', frameworksRouter);


app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});

