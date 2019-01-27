const express = require('express');
const app = express();
const logger = require('morgan');
const axios = require('axios');
const port = process.env.PORT || 5000;
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
const monster = 'https://api.jobs.com/v2/search/jobs';
app.use(logger('dev'));
app.use(express.json());

var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://temp:nwHacks2019@ds213715.mlab.com:13715/heroku_l0wkkk3t", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

//Route setup
app.post('/api/jobs', (req, res) => {
    // Geocode an address.
   console.log("request body " + JSON.stringify(req.body));
   //res.json('huh')
});

//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
});