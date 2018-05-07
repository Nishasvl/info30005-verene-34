const express = require('express');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// // Database set up
require('./models/db.js');


// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');

app.use(expressSession({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized:true
    }));

app.use(passport.initialize());
app.use(passport.session());


// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

// Routes
const passportRouter = require('./routes/passportroutes.js')(passport);
app.use("/", passportRouter);
/*const router = require('./routes/routes.js');
app.use("/", router);*/


const PORT = process.env.PORT || 3020;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});


app.use(express.static('public'));
app.set('view engine', 'ejs');





