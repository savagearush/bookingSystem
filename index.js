const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const querys = require("./routes/querys");
const users = require("./routes/users");
const startDatabase = require("./db");

if (process.env.NODE_ENV == "development") app.use(morgan("tiny"));

// Routess
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/querys", querys);
app.use("/users", users);

startDatabase();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is Listening on Port ${PORT}.`);
});
