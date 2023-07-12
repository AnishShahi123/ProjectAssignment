const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();

const secretKey = "SECRET_KEY";

// Middleware for parsing request body
app.use(express.json());

// Connect to MongoDB
const connectToMongoDB = async () => {
  const uri =
    "mongodb+srv://kanxagucci:gUcyRt0WsatxcTOS@cluster0.veh2xup.mongodb.net/?retryWrites=true&w=majority";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

connectToMongoDB();

// Create a model
const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  confirmPassword: String,
});
const User = mongoose.model("User", UserSchema);

// Register a new user
app.post("/register", async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = new User({
      fullName,
      email,
      password,
      confirmPassword,
    });

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

    // // Generate a token
    // const token = jwt.sign({ userId: user.id }, secretKey, {
    //   expiresIn: 60 * 60,
    // });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
