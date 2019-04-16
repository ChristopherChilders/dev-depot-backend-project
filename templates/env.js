// This file is required if you opt to use the 'dotenv' node module.

// You will need `require('dotenv').config();` at the top of each file 
// you intend to use `env`

// Wherever `env` is called, it correlates variables that 
// follow to this file to fill in the necessary information.

// The '.env' file is only on the server that hosts your 
// project and machine you use to work on the project. 

// Like a private file, it is recommended to be added to global git ignore.

//Don't forget to set a port number for your project!
PORT=1234

CLIENT_ID=
CLIENT_SECRET=

//Set this to your database host, 
DB_HOST=DatabaseHostLocation

//This is used to hide your database name.
DB_NAME=DatabaseName

//This is only needed if you opt to use sessions.
SESSION_SECRET=UserSessionSecret