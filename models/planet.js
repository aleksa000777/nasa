var mongoose = require('mongoose');

var planetSchema = mongoose.Schema({
  name: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Planet', planetSchema);
