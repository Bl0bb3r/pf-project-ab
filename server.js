const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

// Endpoints
const itemRouter = require("./items/itemAPI");

const app = express();

app.use(express.json());
app.use(cors());

// DB config key using mongoDB Uri - simplified - should be in .env
const connectionString = require("./config/keys").mongoURI;

// actual connection to mongoDB *Promise*
mongoose
  .connect(connectionString)
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((error) => console.log(error));

const db = mongoose.connection;
db.once("open", () => {
  console.log("OPEN");
});

app.use(express.json());

app.use("/api", itemRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
