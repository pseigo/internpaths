const express = require('express');
const app = express();
const logger = require('morgan');
//const axios = require('axios');
const jobpost = require('./controllers/jobpost.controller');
const joblist = require('./controllers/jobslist.controller');
const port = process.env.PORT || 5000;
let mongoDB = process.env.MONGODB_URI || "mongodb://temp:nwHacks2019@ds213715.mlab.com:13715/heroku_l0wkkk3t";
var mongoose = require('mongoose');
app.use(logger('dev'));
app.use(express.json());

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Route setup
// app.post('/api/jobs', (req, res) => {
//     // Geocode an address.
//    console.log("request body " + JSON.stringify(req.body));
//    //res.json('huh')
// });
app.post('/api/get', jobpost.get);
app.post('/api/retrieve', joblist.retrieve);
app.post('/api/create', jobpost.create);

//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
});