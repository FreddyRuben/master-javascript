'use strict'

window.addEventListener('load', () => {

  // Eventos del raton

  var boton = document.querySelector("#boton");

  var cambiarColor = () => {
    var bg = boton.style.background;
    if (bg == 'green') {
      boton.style.background = "red";

    }else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
  }

  // Click
  boton.addEventListener('click', function(){
    cambiarColor();
    console.log(this);
    this.style.border = "10px solid black";
  });

  // Mouse over
  boton.addEventListener('mouseover', () => {
    boton.style.background = 'yellow';
  })

  // Mouse out
  boton.addEventListener('mouseout', () => {
    boton.style.background = '#ccc';
  });

  // Focus
  var input = document.querySelector('#campo_nombre');
  input.focus();
  input.addEventListener('focus', () => {
    console.log("[focus]Estas dentro del campo");
  });

  // Blur
  input.addEventListener('blur', () => {
    console.log("[blur]Estas fuera del campo");
  });

  // Keydown
  input.addEventListener('keydown', (event) => {
    console.log("[keydown]Pulsando esta tecla", String.fromCharCode(event.keyCode));
  });

  // Keypress
  input.addEventListener('keypress', (event) => {
    console.log("[keypress]Tecla presionada", String.fromCharCode(event.keyCode));
  });

  // Keyup
  input.addEventListener('keyup', (event) => {
    console.log("[keyup], Tecla soltada", String.fromCharCode(event.keyCode));
  });

});
