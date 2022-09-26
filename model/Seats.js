const { model, Schema } = require("mongoose");

const Seats = model(
  "seats",
  new Schema({
    available: {
      type: Number,
      default: 500,
    },
    booked_seat: {
      type: Array,
      default: [],
    },
  })
);
module.exports = Seats;
