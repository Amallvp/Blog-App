const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = express.Router();
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const authRoute = require("./Route/auth.js");
const userRoute = require("./Route/user.js");
const postRoute = require("./Route/posts.js");
const catRoute = require("./Route/category.js");

dotenv.config();
app.use(router);
app.use(express.json());
app.use(
  cors({
    origin: ("*"),
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
  })
);
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(
    process.env.mongoDB_URL,
    { dbName: "Blogs" },
    { useFindAndModify: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", catRoute);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file uploaded");
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server connected at ${port}...`);
});
