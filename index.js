const path = require("path"),
express = require("express"),
app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "res", "index.html"))
});
app.get("/hash", (req, res) => {
  res.sendFile(path.join(__dirname, "res", "hash.html"))
});
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "res", "t.js"))
});
app.get(function (req, res, next) {
  res.sendFile(path.join(__dirname, "res", "404.html"))
});
const listener = app.listen(process.env.PORT, () => {
  console.log(listener.address().port);
});
