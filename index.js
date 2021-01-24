const express = require("express"), 
app = express(),
port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/hash", (req, res) => {
  res.sendFile(__dirname + "/hash.html");
});

app.listen(port, () =>
  console.log(port)
);
