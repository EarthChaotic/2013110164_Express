var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/index');
mongoose.connect(config.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyrouter = require('./routes/company')
var StaffRouter = require('./routes/staff')
var shopRouter = require('./routes/shop')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyrouter)
app.use('/staff',StaffRouter)
app.use('/shop',shopRouter)


module.exports = app;
