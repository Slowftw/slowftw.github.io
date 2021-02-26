const express = require("express"),
app = express();
app.listen(process.env.PORT);
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});
app.get("/hash", (req, res) => {
  res.sendFile(__dirname+"/hash.html")
});
app.get("/test", (req, res) => {
  res.sendFile(__dirname+"/t.js");
});
app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname+"/404.html");
});
