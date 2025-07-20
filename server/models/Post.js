const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // },
  // image: {
  //   type: String,  // For uploaded images
  //   default: null
  // }
}, { 
  timestamps: true  // Adds createdAt and updatedAt automatically
});

module.exports = mongoose.model('Post', postSchema);