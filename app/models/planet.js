var mongoose = require('mongoose');

var planetSchema = mongoose.Schema({
  title: { type: String },
  info: { type: String },
  img: { type: String },
  stats: { type: String },
  temp: { type: String },
  size: { type: String },
  earthday: { type: String },
  earthyear: { type: String },
  moon: { type: String },
  type: { type: String },
  distance: { type: String }

}, { timestamps: true });


module.exports = mongoose.model('Planet', planetSchema);
