//server.js ('npm start')

const express = require('express')
const app = express()
const port = process.env.PORT || 2500

// set the view engine to ejs
app.set('view engine', 'ejs');

// set default directory
app.use(express.static(__dirname + '/public'));

// index page 
app.get('/', function(req, res) {
    res.render('pages/home');
});

// home page 
app.get('/home', function(req, res) {
    res.render('pages/home');
});

// results page
app.get('/results', function (req, res, next) {
    const json = require('./public/data/dolfje_books.json');

    res.render('pages/results', {
        jsonData: json
    });
});

app.get('/offline', function(req, res) {
    res.render('pages/offline')
})

app.listen(port, () => console.log(`App running, listening on port ${port}!`))