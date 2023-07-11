const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://kanxagucci:xY6wUE1IpgsB7gdv@cluster0.xlr8uns.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Create a model
const UserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Register a new user
app.post("/register", async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = new User({ fullname, email, password });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

//Login User
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Perform authentication and generate a token (e.g., JWT)
    //   const token = "generated_token";

    //   res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});
