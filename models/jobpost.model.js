const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JostpostSchema = new Schema({
  company_name: String,
  description: String,
  job_title: String,
  location: String,
  company_url: String,
  listing_url: String,
  date_posted: { type: Date, default: Date.now },
  date_applied: Date,
  stage: String,
  email: String,
  phone: Number,
});

// Export the model
module.exports = mongoose.model('JobPost', JostpostSchema);