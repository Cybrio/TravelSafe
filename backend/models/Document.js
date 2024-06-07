// backend/models/Document.js
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  data: String,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Document', documentSchema);