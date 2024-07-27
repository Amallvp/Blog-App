const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
require('./Connection/connection')  // DB CONNECTION


const authRoute = require("./Routes/auth.js");   //Routes
const userRoute = require("./Routes/user.js");
const postRoute = require("./Routes/posts.js");
const catRoute= require('./Routes/catergory.js')

app.use("/api", authRoute);    
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category",catRoute);





app.use("/images", express.static(path.join(__dirname, "/images"))); //multer

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

app.listen(port, (req, res) => {
  console.log(`server connected at ${port}`);
}); 
