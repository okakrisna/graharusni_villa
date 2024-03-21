const { createUsers, createVilla } = require("../models/villaModel");
const path = require("path");

const getAdmin = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "public", "admin.html")
  );
};

const postUsers = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const newUser = {
      email,
      name,
      password,
    };

    await createUsers(newUser);
    res.status(201).json({ message: "user berhasil ditambahkan" });
  } catch (error) {
    console.error({
      message: "data tidak berhasil ditambahkan",
    });
  }
};

const postVilla = async (req, res) => {
  console.log(req.body);
  try {
    const {
      name_villa,
      description,
      location,
      type_villa,
      facilities,
      total_bedroom,
      capacity,
      price_pernight,
      img_villa,
    } = req.body;

    const newVilla = {
      name_villa,
      description,
      location,
      type_villa,
      facilities,
      total_bedroom,
      capacity,
      price_pernight,
      img_villa,
    };

    await createVilla(newVilla);
    res.status(201).json({ message: "data berhasil ditambahkan" });
  } catch (error) {
    console.error({
      message: "data tidak berhasil ditambahkan",
    });
  }
};

module.exports = { postUsers, postVilla, getAdmin };
