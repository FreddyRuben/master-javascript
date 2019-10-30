'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, cual el menor y si son iguales
Plus: Si los numeros no son un numero, o son menores o iguales a cero, nos los vuelva a pedir
*/



do{

  var numero1 = Number(prompt("Introduce el primer numero", 0));
  var numero2 = Number(prompt("Introduce el segundo numero", 0));

    if (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
      alert("Vuelve a introducir los datos")
    }

}while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2));

if (numero1 > numero2) {
  alert("El mayor es: "+numero1);
  alert("El menor es: "+numero2);
}else if (numero1 < numero2) {
  alert("El mayor es: "+numero2);
  alert("El menor es: "+numero1);
}else if (numero1 == numero2) {
  alert("Los numeos son iguales");
}else{
  alert("Solo se aceptan numeros");
}
