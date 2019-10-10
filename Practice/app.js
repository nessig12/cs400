var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var  a = require('async');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ps3Router = require('./routes/ps3');

//http://apilayer.net /api/live?access_key =707d4d

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//.use means you're adding a chain to the middleware
//all of the use files have a next() at the end of the function
app.use(logger('dev'));

//req= request
//res = response
app.use((req, res, next) => {
  console.log(`Method: ${req.method} received for ${req.url}`);
  next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mount routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ps3', ps3Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
