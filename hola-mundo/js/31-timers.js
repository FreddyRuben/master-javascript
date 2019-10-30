'use strict'

window.addEventListener('load', () => {
  // Timers

  var iniciarIntervalo = () => {

    var tiempo = setInterval(() => {
      console.log(`Set interval ejecutado`);
      var encabezado = document.querySelector('h1');
      if (encabezado.style.fontSize == '50px') {
        encabezado.style.fontSize = '30px';
      }else {
        encabezado.style.fontSize = '50px';

      }
    }, 1000);
    return tiempo;
  }

  var tiempo = iniciarIntervalo();

  var stop = document.querySelector('#stop');

  stop.addEventListener('click', () => {
    clearInterval(tiempo);
    alert("Has parado el intervalo en bucle.");
  });

  var start = document.querySelector('#start');

  start.addEventListener('click', () => {
    alert(`Has iniciado el intervalo en bucle`);
    iniciarIntervalo();

  });
});
