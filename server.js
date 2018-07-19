const port = 5000;
const path = require('path');
const db_name = "cakes_db"; // Project's database name


// ============ Express ============
const express = require('express');
const app = express();


// ============ Body Parser ============
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ============ Start Server ============
const server = app.listen(port, () => {
    console.log("---> listening on port " + port);
});


// ============ Socket ============
const io = require('socket.io')(server);


// ============ Mongoose ============
require('./server/config/mongoose.js')(db_name);


// ============ Models ============
require('./server/models/cake.model');


// ============ Static Routes ============
app.use(express.static( __dirname + '/public/dist/public'));


// ============ Routes ============
require('./server/config/routes')(app);
