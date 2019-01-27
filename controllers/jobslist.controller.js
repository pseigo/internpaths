const Jobpost = require('../models/jobpost.model');

exports.retrieve = function (req, res) {
    var query = Jobpost.find();
    query.exec(function (err, docs) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send(docs);
    });
};