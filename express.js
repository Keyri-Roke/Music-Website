const express = require('express')
const es6Renderer = require('express-es6-template-engine')
// Get the friendsList data from app.js
const friendsList = require('./app')

const app = express()

const homeRouter = require('./routes/home');
const albumRouter = require('./routes/app');
// We have to do some initial setup for our template engine
// First we specify to express what template engine we are using
app.engine('html', es6Renderer)
// Then we can tell express that our files to show on the frontend
// will always be in the 'templates' folder
app.set('views', 'templates')
// Last, we tell express that the files to be shown will always be html files
app.set('view engine', 'html')

app.use('/', homeRouter);
app.use('/album', albumRouter);

// app.get('/', function(req, res) {
//   res.render('home')
// })

app.get('/music', function(req, res, next) {
  res.render('../templates/music.html')
});

app.listen(3000, function(req, res) {
    console.log('Server is running 3000')
})