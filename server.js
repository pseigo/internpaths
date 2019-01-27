const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 5000;
app.use(logger('dev'));
app.use(express.json());

//Route setup
app.post('/api/glassdoor', (req, res) => {
    // Geocode an address.
   //console.log("request abody" + JSON.stringify(req.body))
   //res.json('huh')
});

app.post('/api/indeed', (req, res) => {
    // Geocode an address.
   //console.log("request abody" + JSON.stringify(req.body))
   //res.json('huh')
});

//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`)
});