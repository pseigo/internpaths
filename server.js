const express = require('express');
const app = express();
const logger = require('morgan');
const axios = require('axios');
const port = process.env.PORT || 5000;
const monster = 'https://api.jobs.com/v2/search/jobs';
app.use(logger('dev'));
app.use(express.json());

//Route setup
app.post('/api/jobs', (req, res) => {
    // Geocode an address.
   console.log("request body " + JSON.stringify(req.body));
   axios.post('https://api.jobs.com/auth/token?AppId=internpaths&AppSecret=f3qt987hd')
   .then(function(res) {
        console.log(res);
   })
   .catch(function(err) {
        console.log(err);
   })  
   //res.json('huh')
});

//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
});