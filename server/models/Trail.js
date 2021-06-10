const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
  trailName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  location: { type: String, required: true },
  parkName: { type: String, required: true },
  excerpt: { type: String, required: true },
  difficulty: { type: String, required: true },
  length: { type: Number, required: true },
  elevationGain: { type: String, required: true },
  trailType: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true }
});

const Trail = mongoose.model('trail', trailSchema);

module.exports = Trail;