require('dotenv').config();


const express = require('express');
const app = express();
const PORT = process.env.PORT;
const es6Renderer = require('express-es6-template-engine');

const User = require('./models/users');


const session = require('express-session');
const FileStore = require('session-file-store')(session);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
// const setupAuth = require('./auth');

// setupAuth(app);

app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }));
app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET
}));

// function to get a hashed password
// async function demo() {
//     const user = await User.getByEmail('childers@yahoo.com');
//     user.setPassword("password");
//     await user.save();
//     console.log('you did the thing')
// }
// demo();

// Router
const logInRouter = require('./routes/login');
app.use('/login', logInRouter);
const dashboardRouter = require('./routes/dashboard');
app.use('/dashboard', dashboardRouter);
const frameworksRouter = require('./routes/frameworks');
app.use('/frameworks', frameworksRouter);
const registrationRouter = require('./routes/registration');
app.use('/registration', registrationRouter);

// app.get('/dashboard', (req, res) => {
//     if (req.session.user) {
//         console.log(`The user's id is: ${req.session.user}`);
//         res.render('dashboard');
//     } else {
//         res.redirect('/login');
//     }
// });




app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});

