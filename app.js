var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://EarthChaotic:earth2102@2013110164-jirapon.z3xaafs.mongodb.net/RestfulAPI?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyrouter = require('./routes/company')
var StaffRouter = require('./routes/staff')
var shopRouter = require('./routes/shop')
var menuRouter = require('./routes/menu')


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
app.use('/menu',menuRouter)


module.exports = app;
