'use strict'

// BOM Browser Object Model
var getBom = () => {
  // console.log(window.innerWidth);
  // console.log(window.innerHeight);
  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location.href);
}

var redirect = (url) => {
  window.location.href = url;
}

var abrirVentana = (url) => {
  window.open(url, "", "width=400, height=300");
}

getBom();
