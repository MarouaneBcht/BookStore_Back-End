const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoute");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const dotenv = require('dotenv');
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/books", router); // localhost:5000/books


//
dotenv.config({path:'./.env'})
PORT = process.env.PORT
DB = process.env.db_con

mongoose.connect(DB, ()=>console.log("database connected"))
app.listen(PORT, ()=>console.log(`Server running on ${PORT}`))



