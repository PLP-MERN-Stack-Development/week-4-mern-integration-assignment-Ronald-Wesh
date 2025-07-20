// // middlewares/validatePost.js
// const { body } = require("express-validator");

// const validatePost = [
//   body("title")
//     .notEmpty()
//     .withMessage("Title is required"),
//   body("content")
//     .isLength({ min: 10 })
//     .withMessage("Content should be at least 10 characters long"),
//   body("category")
//     .notEmpty()
//     .withMessage("Category is required"),
//   body("featuredImage")
//     .optional()
//     .isURL()
//     .withMessage("Featured image must be a valid URL"),
// ];

// module.exports = validatePost;

const { body } = require("express-validator");

const validatePost = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
];

module.exports = validatePost;
