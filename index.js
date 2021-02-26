const express = require("express"), 
app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/hash", (req, res) => {
  res.sendFile(__dirname + "/hash.html");
});
app.get("/t", (req, res) => {
  res.sendFile(__dirname + "/t.js");
});

const listener = app.listen(process.env.PORT, () => {
  console.log(listener.address().port);
});
