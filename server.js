const express = require("express");
const bookRouter = require("./routes/book.routes");
const userRouter = require("./routes/user.routes");

const connectDB = require("./config/db");

const app = express();

require("dotenv").config();

connectDB();
app.use(express.json());

app.use("/books", bookRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Listening on port ${PORT}`);
});