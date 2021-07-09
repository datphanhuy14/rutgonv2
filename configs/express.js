let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let nunjucks = require('nunjucks');
let favicon = require('serve-favicon');


let index = require('../app/routes/index');

let app = express();

app.set('view engine', 'html');
// app.set('views', path.join(__dirname, '../libs/views'));

// view engine setup
nunjucks.configure(path.join(__dirname, '../app/views'), {
    autoescape:  true,
    express:  app
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
//set main router
app.use('/', index);
//set main middleware
app = require('./middleware')(app);

module.exports = app;
