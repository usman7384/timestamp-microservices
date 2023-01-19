var express = require('express');

const Router = require("express").Router();

Router.get('/', (req, res) => {
    res.json({ unix: Date.now(), utc: Date() });
    }
);

Router.get('/:date_string', (req, res) => {
    let date_string = req.params.date_string;
    let date = new Date(date_string);
    if (date == 'Invalid Date') {
        date = new Date(parseInt(date_string));
    }   
    if (date == 'Invalid Date') {
        res.json({ error: "Invalid Date" });
    } else {
        res.json({ unix: date.getTime(), utc: date.toUTCString() });
    }
});


module.exports = Router;