'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros
introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero: "));
var numero2 = parseInt(prompt("Introduce el segundo numero: "));

document.write("<h1>Los numeros impares que hay entre "+numero1+" y "
+numero2+" son:</h1>");
for (var i = numero1; i <= numero2; i++) {
  if (i % 2 == 1) {
    document.write(i+"<br/>");
  }
}
