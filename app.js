const express = require('express');
const router = require ('./src/routes/api');
const app = express();
const bodyParser = require('body-parser');
const path= require('path');

// Secure Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//DataBase 
const mongoose = require('mongoose');
app.use(express.static('client/build'));

// Security Middleware implementation
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body Parser
app.use(bodyParser.json())

// Rate Limit
const limiter = rateLimit({windowMs: 15*60*60, max:3000})


// Manage BackEnd Routings
app.use("/api/v1", router)

// Database Connection
let URI = 'mongodb+srv://<username>:<password>@cluster0.gsyup6g.mongodb.net/CRUD?retryWrites=true&w=majority';
let OPTION = {user: 'testuser7777', pass: 'testuser7777', autoIndex: true};
mongoose.connect(URI, OPTION, (error)=>{
    console.log("Database Connection Success")
    console.log(error)
})


//Manage Frontend Routes
app.use(express.static('client/build'))
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
})







module.exports = app;