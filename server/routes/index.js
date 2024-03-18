const express = require("express");
const { getHome } = require("../controllers/user");
const {
  getDataVilla,
  getBooking,
  getDataimg,
} = require("../controllers/villa");
const router = express.Router();
//* users routing
router.get("/", getHome);

//* products routing
// router.get(getDataVilla);
router.get("/getDataVilla", getDataVilla);
router.get("/booking", getBooking);

module.exports = router;
