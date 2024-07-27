const mongoose = require("mongoose");


// <<------------DB CONNECTION-------------->> //

mongoose
  .connect(process.env.MONGO_URI, { dbName: "Blogs" })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
