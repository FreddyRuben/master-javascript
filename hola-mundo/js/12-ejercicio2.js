'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var numero;
var suma = 0;
var cantidad = 0
do {

  numero = parseInt(prompt("Introduce un numero"));

  if (numero >= 0) {
    cantidad++;

    suma = suma + numero;
  }

  console.log(suma);
  console.log(cantidad);

} while (numero >= 0);

alert("La suma es: "+suma);
alert("La media es: "+(suma / cantidad));
