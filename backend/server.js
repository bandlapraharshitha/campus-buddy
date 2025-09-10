const express = require('express');
require('./config/passport');
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.js");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

mongoose.connect("mongodb+srv://shanmugapriyab211_db_user:TVK@cluster0.vjual9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err.message));

app.get('/', (req, res) => {
  res.send('Campus Buddy Backend is running');
})


app.listen(3000, () => {
  console.log('Campus Buddy backend running on http://localhost:3000');
})