const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const validatePost = require("../middleware/validatePost");
const handleValidation = require("../middleware/handleValidation");
const protect = require("../middleware/auth"); 

router.post("/", protect, validatePost, handleValidation, createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", validatePost, handleValidation, updatePost);
router.delete("/:id", deletePost);

module.exports = router;


