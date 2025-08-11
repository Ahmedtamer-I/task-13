const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is Required"],
    unique: true,
  },
  description: String,
  ratings: { type: Number, default: 1.0 },
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;