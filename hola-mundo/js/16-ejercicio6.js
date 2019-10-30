'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero.
*/



while(isNaN(numero)){
  var numero = parseInt(prompt("Introduce un numero", 0));
}

if (numero % 2 == 0) {
  alert("Este numero es par");
}else {
  alert("Este numero es impar");
}
