require('dotenv').config();


const express = require('express');
const app = express();
const PORT = process.env.PORT;
const es6Renderer = require('express-es6-template-engine');

const User = require('./models/users');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
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

// async function demo() {
//     const user = await User.getByEmail('childers@yahoo.com');
//     user.setPassword("password");
//     await user.save();
//     console.log('you did the thing')
// }
// demo();


app.get('/login', (req, res) => {
    res.render('login', {
        locals: {
            email: '',
            message: ''
        }
    });
});

app.post('/login', async (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);

    const theUser = await User.getByEmail(req.body.email);
    const correctPassword = theUser.checkPassword(req.body.password);
    if (correctPassword) {
        req.session.user = theUser.id;
        req.session.save(() => {
            res.redirect('/dashboard');
        });
    } else {
        res.render('login', {
            locals: {
                email: req.body.email,
                message: 'Password IS WRONG. GET OUT!'
            }
        });
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        console.log(`The user's id is: ${req.session.user}`);
        res.send('Welcome to DevDepot!');
    } else {
        res.redirect('/login');
    }
});



app.listen(PORT, () => {
    console.log(`You're running on port ${PORT}`);
});

