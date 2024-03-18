const { findAllVilla, imgData } = require("../models/villaModel");
const path = require("path");

const getBooking = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "public", "booking.html")
  );
};

const getDataVilla = async (req, res) => {
  try {
    const villa = await findAllVilla();
    res.json(villa);
  } catch (error) {
    console.log(error);
    res.status({
      status: 500,
      message: " internal server error",
    });
  }
};

module.exports = { getDataVilla, getBooking };
