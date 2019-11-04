require('dotenv').config()
const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  Filename: {
    type: String,
    required: true
  },
  fileType: {
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

// virtual property that generates the file URL location
uploadSchema.virtual('fileUrl').get(function () {
// generating
const url = 'https://' + process.env.BUCKET_NAME + '.s3.amazonaws.com/' + this.fileName

// return url

return url =
})
module.exports = mongoose.model('Upload', uploadSchema)
