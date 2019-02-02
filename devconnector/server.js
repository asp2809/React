const express = require("express");
const mongoose = require("mongoose");

const app = express();

const oauth = require("./routes/api/oauth");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use Routes
app.use("/api/oauth", oauth);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));
