const express = require("express");
const querys = express.Router();
const Seats = require("../model/Seats");

// https://localhost:3000/querys/seat-availability

querys.get("/seat-availability", async (req, res) => {
  const availability = await Seats.find();
  res.status(200).send(availability["available"]);
});

module.exports = querys;
