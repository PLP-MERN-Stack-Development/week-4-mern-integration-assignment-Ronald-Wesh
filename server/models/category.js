// // Category.js - Mongoose model for blog categories

// const mongoose = require('mongoose');

// const CategorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please provide a category name'],
//       unique: true,
//       trim: true,
//       maxlength: [50, 'Category name cannot be more than 50 characters'],
//     },
//     slug: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     description: {
//       type: String,
//       maxlength: [200, 'Description cannot be more than 200 characters'],
//     },
//   },
//   { timestamps: true }
// );

// // 🔧 Pre-save middleware to generate slug from name
// CategorySchema.pre('save', function (next) {
//   if (!this.isModified('name')) {
//     return next();
//   }

//   this.slug = this.name
//     .toLowerCase()
//     .replace(/[^\w ]+/g, '')
//     .replace(/ +/g, '-');

//   next();
// });

// // 📦 Export the model
// module.exports = mongoose.model('Category', CategorySchema);

// server/models/Category.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('category', categorySchema);
