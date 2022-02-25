const express = require("express");
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

app.listen(PORT, () => {
  console.log(`listing to http://localhost:${PORT}`);
});
