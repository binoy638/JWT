const express = require("express");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

mongoose.connect(
  process.env.ATLAS_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("connected to mongo")
);

//Middlewares
app.use(express.json());

//Route Middlewars
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

// const posts = [
//   {
//     username: "User1",
//     title: "POST1",
//   },
//   {
//     username: "User2",
//     title: "POST2",
//   },
// ];

// app.get("/posts", (req, res) => {
//   res.json(posts);
// });

// app.post("/login", (req, res) => {
//   //Authenticate User
//   const {username} = req.body
//   const user = {name:username}

//   jwt.sign(user,)

// });

app.listen(PORT, () => {
  console.log(`listing to http://localhost:${PORT}`);
});
