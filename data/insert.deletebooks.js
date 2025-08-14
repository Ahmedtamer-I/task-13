const connectDB = require("../config/db");
const Book = require("../models/book.model");
const BooksData = require("./books.json");

const insertBooks = async () => {
  try {
    await connectDB();
    await Book.insertMany(booksData);
    console.log("Books inserted successfully.");
    process.exit();
  } catch (error) {
    console.error("Failed to insert books:", error.message);
    process.exit(1);
  }
};

const deleteBooks = async () => {
  try {
    await connectDB();
    await Book.deleteMany();
    console.log("All books deleted successfully.");
    process.exit();
  } catch (error) {
    console.error("Failed to delete Books:", error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "--insert") {
  insertBooks();
} else if (process.argv[2] === "--delete") {
  deleteBooks();
} else {
  console.log("Unknown command. Use --insert or --delete");
  process.exit();
}