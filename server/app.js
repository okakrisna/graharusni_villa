const express = require("express");
const path = require("path");
const router = require("./routes");
const app = express();

const port = 3000; // Port yang akan digunakan oleh server

app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(router);
const convertRupiah = require("rupiah-format");

// Memulai server
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
