const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const validateCategory = require("../middleware/validateCategory");
const handleValidation = require("../middleware/handleValidation");

router.post("/", validateCategory, handleValidation, createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", validateCategory, handleValidation, updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
