const User = require('../models/users');
const Message = require('../models/message_board');





async function goToDashboard(req, res) {
    
///////////////////////////////////////////////////////////////////////////////////
// This! This is how we display a file to the dashboard if it's not in a sql file/database!
// Psst! Don't forget to import fs at the top
//readFile function grabs text from file path and hands it to res.render within it.
//Data is ${} into html div
// fs.readFile('templates/users.js', 'utf-8', (err, data) => {
    //     // console.log(data);
    //     res.render('dashboard',{
        //         locals: {
            //             code:data
            //         }
            //     });
            // });
///////////////////////////////////////////////////////////////////////////////////

    const messageBoard = await Message.getMessage();
    const userData = await User.getById(req.session.user);

    // console.log('====');
    console.log('====',messageBoard);
    // console.log('++++++++++',userData);
    res.render('dashboard', {
        locals: {
            greeting: `Welcome ${userData.username}!`,
            messages: messageBoard
        }
    });
}


module.exports = {
    goToDashboard
}