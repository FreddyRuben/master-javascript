'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var tabla = parseInt(prompt("Introduce la tabla que desee visualizar"));
document.write("<h2>Tabla del "+tabla+"</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(tabla+" x "+i+" = "+(tabla*i)+"<br/>");
}


//Todas las tablas

for (var i = 1; i <= 10; i++) {
  document.write("<h2>Tabla del "+i+"</h2>");
  document.write("<br/>");
  for (var j = 1; j <= 10; j++) {
    document.write(i+" x "+j+" = "+(i*j)+"<br/>");
  }
}
