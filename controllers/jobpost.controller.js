const Jobpost = require('../models/jobpost.model');

exports.create = function (req, res) {
    let jobpost = new Jobpost(
        {
            company_name: "Telus",
            description: "Telus is the leading company for things",
            job_title: "Software Engineer",
            location: "4580 W 10th Ave, Vancouver, BC V6R 4C5",
            company_url: "telus.com",
            listing_url: "indeed.ca",
            date_posted: new Date,
            date_applied: null,
            stage: "Not applied",
            email: "recruit@telus.com",
            phone: 1111111111,
        }
    );

    console.log("test");
    jobpost.save(function (err) {
        if (err) {
            console(err);
            return next(err);
        }
        console.log('Product Created successfully')
    })
}

exports.get = function (req, res) {
    var query = Jobpost.find({
        job_title: req.body.job_title
    });
    query.exec(function (err, docs) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send(docs);
    });
};