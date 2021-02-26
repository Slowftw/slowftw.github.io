const express = require("express"),
app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});
app.get("/hash", (req, res) => {
  res.sendFile(__dirname+"/hash.html")
});
app.get("/test", (req, res) => {
  res.sendFile(__dirname+"/t.js");
});
const listener = app.listen(process.env.PORT, () => {
  console.log(listener.address().port);
});
app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname+"/404.html");
});
