const mongoose = require('mongoose')

const uploaderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  actual_file: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('uploader', uploaderSchema)
