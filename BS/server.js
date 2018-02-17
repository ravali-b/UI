var express = require('express');
var http = require('http');
var path = require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
const url = 'mongodb://localhost:27017';
const dbName = 'BookShelf';

mongoose.connect('mongodb://localhost/BookShelf');

var Schema = new mongoose.Schema({
    bName: String,
    bIsbn: String,
    bAuthor: String,
    bYear: Date
});

var user = mongoose.model('books', Schema);

app.post('/new', function(req, res){
    new user({
        bName:req.body.bName,
        bIsbn:req.body.bIsbn,
        bAuthor:req.body.bAuthor,
        bYear:req.body.bYear
    }).save(function(err, docs){
        if(err) res.json(err);
        else {
            res.redirect('/#/services');
        }
    });
});

app.get('/book', function(req, res){
    user.find({}, function(err, docs){
        if(err) res.json(err);
        else    res.render('index', {users: docs});
    });
});



var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});