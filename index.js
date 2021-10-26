const express = require("express"),
  app = express(),
  he = require("he"),
  path = require("path"),
  favicon = require("serve-favicon");
app.use(favicon(__dirname + "/favicon.ico"));
app.get("/", (req, res) => {
  try {
    let title = req.query["0"].trim()
        ? he.encode(req.query["0"].match(/.{1,256}/g)[0])
        : "👁‍🗨",
      description = req.query["1"].trim() ? he.encode(req.query["1"]) : "📼";
    res.send(
      `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta property="description"content="${title}"/><meta name="theme-color"content="#101010"/><link rel="icon"href="https://cdn.discordapp.com/attachments/833228686937292821/837417245609033728/s.jpg"type="image/jpg"><meta property="og:site_name"content="🐢"/><meta property="og:image"content="https://cdn.discordapp.com/attachments/833228686937292821/836719818030972928/cats.gif"/><meta property="og:image:width"content="180"/><meta property="og:image:height"content="180"/><meta property="og:url"content="https://slowftw.github.io/"/><meta property="og:title"content="${title}"/><meta property="og:description"content="${description}"/><title>${title}</title></head><body style="background-color:#111"><h1 style="color:#FFF">${description}</h1></body></html>`
    );
  } catch (_) {
    res.sendFile(__dirname + "/index.html");
  }
});
//iframe test
app.get("/yt",(req,res)=>{res.sendFile(__dirname+"/yt.html")});
//
app.get("/s",(req,res)=>{res.redirect("https://example.org")});
//notfound
app.use(function (req, res, next) {
  res.status(404).send('<!DOCTYPE html><meta charset="utf-8"/><title>404</title><body style="background-color:#111"><h1>&#x1F635;</h1>');
});
app.listen(process.env.PORT);
