//* home page

const getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "public", "index.html"));
};

module.exports = { getHome };
