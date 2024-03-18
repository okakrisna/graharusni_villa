const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const fs = require("fs");

const findAllVilla = () => {
  return knex("villa").select("*");
};

const imgData = () => {
  const fileImage = fs.readFileSync([
    "../../client/public/assets/room-arjuna.jpg",
    "../../client/public/assets/krisna-room.jpg",
    "../../client/public/assets/bisma-room.jpg",
    "../../client/public/assets/duryudana-room.jpg",
  ]);

  return knex("villa")
    .insert({ img_villa: fileImage })
    .then(() => {
      console.log(`Gamabar  berhasil dimasukan ke database`);
    })
    .catch(() => {
      console.error(`gagal memasukan gambar  ke dalam database`);
    });
};

module.exports = { findAllVilla, imgData };
