// Create web server

// Import dependencies
const express = require("express");

// Create router
const router = express.Router();

// Import controller
const commentsController = require("../controllers/comments");

// Import middleware
const authMiddleware = require("../middleware/auth");

// Create routes
router.get("/", commentsController.getAllComments);
router.get("/:id", commentsController.getCommentById);
router.post("/", authMiddleware.checkAuth, commentsController.createComment);
router.put("/:id", authMiddleware.checkAuth, commentsController.updateComment);
router.delete("/:id", authMiddleware.checkAuth, commentsController.deleteComment);

// Export router
module.exports = router;