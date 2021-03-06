const express        = require('express');
const path           = require('path');
const favicon        = require('serve-favicon');
const logger         = require('morgan');
const cookieParser   = require('cookie-parser');
const bodyParser     = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const portDB         = require('./config').portDB;
const databaseName   = require('./config').databaseName;
const session        = require("express-session");
const auth           = require('./helpers/auth');
const flash          = require("connect-flash");
const mongoose       = require("mongoose");
var multer  = require('multer');

const index          = require('./routes/index');
const authController = require('./routes/authController');

let app = express();

// Connection to DB
mongoose.connect(`mongodb://localhost:${portDB}/${databaseName}`);

app.set('layout', 'layouts/main');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//testing

app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.locals.title = 'Title your App';

// session
app.use(session({
  secret           : "passport-local-strategy",
  resave           : true,
  saveUninitialized: true,
  cookie           : { maxAge: 600000000 }
}));

app.use(flash());
const passport = require('./helpers/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(auth.setCurrentUser);

app.use('/', authController);
app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
