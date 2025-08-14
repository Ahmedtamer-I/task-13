const Book = require("../models/book.model");

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);//req
    res.status(201).json({//res
      status: "success",
      data: { book: book },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // get all books
    res.status(200).json({
      status: 200,
      length: books.length,
      data: { books: books },
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({ status: 200, data: { book: book } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const updateBookById = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }//return the updated book //make sure the updated data is valid
    );
    res.status(200).json({ status: "success", data: { book: updatedBook } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", data: { book: deletedBook } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};





