const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // 1. handle password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("my password - hashed", hashedPassword);
    // 2. create user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1. find user
    const [user] = await User.find({ email });
    if (!user) throw new Error("User does not exist. Please sign up.");
    // 2. check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Password is incorrect.");
    } else {
      // 3. create token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
};

module.exports = { getAllUsers, signUp, login };
