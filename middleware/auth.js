const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //Pobranie tokenu z header
  const token = req.header("x-auth-token");

  //Sprawdzenie czy token istnieje
  if (!token) {
    return res.status(401).json({ msg: "Brak tokenu - autoryzacja przerwana" });
  }

  //Weryfikacja tokenu
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token jest nieprawidłowy" });
  }
};
