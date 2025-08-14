const express = require("express");
const bookControllers = require("../controllers/book.controllers");

const router = express.Router();

router
  .route("/")
  .post(bookControllers.createBook)
  .get(bookControllers.getAllBooks);
router
  .route("/:id")
  .get(bookControllers.getBookById)
  .patch(bookControllers.updateBookById)
  .delete(bookControllers.deleteBookById);

module.exports = router;