const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('C:/Users/Administrator/Desktop/resume')));

app.get('/', function(req,res){
    res.sendFile(path.join('C:/Users/Administrator/Desktop/resume/index.html'))
});
app.get('/index', function(req,res){
    res.sendFile(path.join('C:/Users/Administrator/Desktop/resume/index.html'))
});
app.get('/experience', function(req,res){
    res.sendFile(path.join('C:/Users/Administrator/Desktop/resume/experience.html'))
});
app.get('/projects', function(req,res){
    res.sendFile(path.join('C:/Users/Administrator/Desktop/resume/projects.html'))
});
app.get('/contact', function(req,res){
    res.sendFile(path.join('C:/Users/Administrator/Desktop/resume/contact.html'))
});
app.listen(3000, function(){
    console.log('Server listening on port http://localhost:3000/')
});