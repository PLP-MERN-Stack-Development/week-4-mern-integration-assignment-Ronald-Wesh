// middlewares/validateCategory.js
const { body } = require("express-validator");

const validateCategory = [
  body("name")
    .notEmpty()
    .withMessage("Category name is required"),
];

module.exports = validateCategory;
