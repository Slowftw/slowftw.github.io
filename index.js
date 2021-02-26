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
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
const listener = app.listen(process.env.PORT, () => {
  console.log(listener.address().port);
});
