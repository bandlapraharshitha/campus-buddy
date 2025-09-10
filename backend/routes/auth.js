// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User.js");
// require('dotenv').config();
// const { validateEmail, validatePassword } =  require("../utils/validators.js");
// const {verifyToken} = require("../middleware/authMiddleware.js")

// const router = express.Router();
// const JWT_SECRET = process.env.JWT_SECRET; 

// router.post("/signup", async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword, role, course, year, department } = req.body;

//     const emailCheck = validateEmail(email);
//     if (!emailCheck.valid) {
//       return res.status(400).json({ message: emailCheck.message });
//     }

//     const passwordCheck = validatePassword(password);
//     if (!passwordCheck.valid) {
//       return res.status(400).json({ message: passwordCheck.message });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       role,
//       course: role === "student" ? course : undefined,
//       year: role === "student" ? year : undefined,
//       department: role === "teacher" ? department : undefined,
//     });

//     await newUser.save();

//     const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: "7d" });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production", 
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000 
//     });

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const emailCheck = validateEmail(email);
//     if (!emailCheck.valid) {
//       return res.status(400).json({ message: emailCheck.message });
//     }

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production", 
//       sameSite: "lax",
//       maxAge: 7 * 24 * 60 * 60 * 1000 
//     });

//     res.json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//         course: user.course,
//         year: user.year,
//         department: user.department
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// router.post("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.json({ message: "Logged out successfully" });
// });

// router.get("/dashboard", verifyToken, (req, res) => {
//   res.json({ message: `Welcome, user ID: ${req.user.id}, Role: ${req.user.role}` });
// });

// module.exports = router;




const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
require("dotenv").config();
const { validateEmail, validatePassword } = require("../utils/validators.js");
const { verifyToken } = require("../middleware/authMiddleware.js");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// -------------------- SIGNUP --------------------
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword, role, course, year, department } = req.body;

    // basic checks
    if (!username || !email || !password  || !role) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // email validation
    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) {
      return res.status(400).json({ message: emailCheck.message });
    }

    // password validation
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.valid) {
      return res.status(400).json({ message: passwordCheck.message });
    }

    // // confirm password
    // if (password !== confirmPassword) {
    //   return res.status(400).json({ message: "Passwords do not match" });
    // }

    // existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      course: role === "student" ? course : undefined,
      year: role === "student" ? year : undefined,
      department: role === "teacher" ? department : undefined,
    });

    await newUser.save();

    // generate token
    const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, { expiresIn: "7d" });

    // send cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        course: newUser.course,
        year: newUser.year,
        department: newUser.department,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// -------------------- LOGIN --------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) {
      return res.status(400).json({ message: emailCheck.message });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        course: user.course,
        year: user.year,
        department: user.department,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// -------------------- LOGOUT --------------------
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

router.get("/me", verifyToken, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ user });
});


module.exports = router;
