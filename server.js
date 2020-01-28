
const express = require('express');
const app = express();

const cors = require('cors');

const apiRoutes = require('./routes/apiRoutes');


const expressValidator = require('express-validator');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

const port = 5000;

// middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(expressValidator());
app.use(cookieParser());
app.use(express.text());
app.use(express.json({ type: 'application/*+json' }));

//routes

app.use(apiRoutes);

app.listen(port, () => `Server running on port ${port}`);

console.log("running!")