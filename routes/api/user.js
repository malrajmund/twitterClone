const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

router.post("/register", async (req, res) => {
  const { name, email, age, password } = req.body;
  try {
    let user = await User.findOne({ name });
    if (user) {
      return res.status(400).json({
        errors: [{ msg: "Użytkownik już istnieje w bazie danych!" }],
      });
    }

    user = new User({
      name,
      email,
      age,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error podczas rejestracji użytkownika.");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: [{ msg: "Użytkownik nie istnieje w bazie danych!" }],
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(500).send("Hasło jest nieprawidłowe!");
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error podczas logowania użytkownika.");
  }
});

module.exports = router;
