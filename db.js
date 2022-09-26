const { connect } = require("mongoose");
const Seats = require("./model/Seats");

module.exports = () => {
  connect(
    "mongodb+srv://admin:admin123@bookingsystem.ofy4bkf.mongodb.net/?retryWrites=true&w=majority"
  )
    .then(async () => {
      console.log("Database connected Successfully.");
      // Initialize the Database on Server
      const data = await Seats.find();
      if (data.length == 0) {
        const initializeDatabase = new Seats({});
        await initializeDatabase.save();
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
