const express = require("express");
const { getHome } = require("../controllers/user");
const {
  getDataVilla,
  getBooking,
  getDataimg,
} = require("../controllers/villa");
const { postVilla, postUsers, getAdmin } = require("../controllers/admin");
const router = express.Router();
//* users routing
router.get("/", getHome);

//* products routing
// router.get(getDataVilla);
router.get("/getDataVilla", getDataVilla);
router.get("/booking", getBooking);
router.get("/admin", getAdmin);
router.post("/admin", postVilla);

module.exports = router;
