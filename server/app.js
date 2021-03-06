// var express = require('express');
import express from "express";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import compression from "compression";


import index from "./routes/index"



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'App'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
 //key : 'sid' //session key
 secret: '@#@$MYSIGN#@$#$', //secret key
 resave: false,
 saveUninitialized: true,
 cookie: {
   maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
 }
}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.locals.pretty = true;
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next)  {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
