'use strict'
 
require('make-promises-safe')

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
require('dotenv/config')

//routes
const UserRoute = require('./routes/User');
const chRoute = require('./routes/CH_status');
const chActiveStatus = require('./routes/Coolhouse');
const ledStatus = require('./routes/led');
dotenv.config();

mongoose.connect(process.env.DB_connection, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

//app.use('/', express.static(path.join(__dirname, 'static')))


// middleware
app.use(express.json());

//route middlewares
app.use('/', UserRoute);
app.use('/', chRoute);
app.use('/', chActiveStatus);
app.use('/', ledStatus);
app.use(bodyParser.json())

app.listen(9999, () => {
	console.log('Server up at 9999')
})
