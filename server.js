const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 5000;
app.use(logger('dev'));
app.use(express.json());

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAzlL-ahnHzJ5HG4MD8IoC1y2kETuhvajA'
});

//Route setup
app.post('/api/map', (req, res) => {
    // Geocode an address.
    res.json('AIzaSyAzlL-ahnHzJ5HG4MD8IoC1y2kETuhvajA')
});

//Start server
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`)
});