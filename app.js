const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoute");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:kagPUYSCGpFAYuxf@cluster0.cokjmr1.mongodb.net/bookStore?retryWrites=true&w=majority"
)
    .then(() => console.log("Server Connected"))
    .then(() => {
        app.listen(5000);
    })
    .catch((error) => console.log(error));

// kagPUYSCGpFAYuxf