const express = require("express");
const users = express.Router();
const Seats = require("../model/Seats");

users.post("/seat-book", async (req, res) => {
  const { request_seats } = req.body[0];
  const data = await Seats.find();
  const { _id, booked_seat } = data[0];
  let already_booked = [];

  request_seats.forEach((ele) => {
    if (booked_seat.includes(ele)) {
      already_booked.push(ele);
    } else {
      booked_seat.push(ele);
    }
  });
  if (already_booked.length > 0) {
    res
      .status(400)
      .send(
        `${already_booked.join(", ")} is already Booked. Select Other Seats.`
      );
    return;
  }
  const fetched_data = await Seats.findById(_id);
  fetched_data.booked_seat = booked_seat;
  fetched_data.available -= booked_seat.length;
  await fetched_data.save();
  res.status(200).send("Seat Booked Successfully.");
});

module.exports = users;
