//Coded by @ilteralkann on GitHub

var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
const cheerio = require('cheerio');
const rp = require('request-promise');
const getUsers = require('./get/users');

app.get('/api/clock', (req,res) => {

    var url = 'https://www.timeanddate.com/worldclock/turkey/istanbul';
    rp(url).then((html)=>{
        var $ = cheerio.load(html) 
        
            let object = {
                "region" : "Turkey",
                "clock" : $("#ct").text(),

            }   
        res.json(object)
    })
})

app.get('/api/users', (req,res) => {
        res.json(getUsers)
})




http.listen(3000, () => {
    console.log('listening port: 3000')
})
