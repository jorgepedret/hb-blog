window.onload = function () {
  var timeout;
  (window.onresize = function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      
      var width = document.width,
        height = document.height,
        markup;
      
      console.log(width, height);

      var el = document.querySelector('.viewport-size');
      if (!el) {
        markup = document.createElement("div");
        markup.className = "viewport-size";
        markup.innerHTML = "w: " + width + ", h: " + height;
        markup.style.background = "#FFFFCD";
        markup.style.color = "#444";
        markup.style.padding = "0px 5px";
        markup.style.position = "fixed";
        markup.style.bottom = "5px";
        markup.style.right = "10px";
        markup.style.fontSize = "11px";
        document.body.appendChild(markup);
      } else {
        el.innerHTML = "w: " + width + ", h: " + height;
      }
    }, 100);
  })();
}