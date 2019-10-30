'use strict'

/*
Calculadora
-Pida dos numeros por pantalla
-Si metemos uno mal que nos lo vuelva a pedir
-En el cuerpo de la pagina, en un alerta y por consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt('Ingrese el primer valor', 0));
var numero2 = parseInt(prompt('Ingrese el segundo valor', 0));

while(isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt('Ingrese el primer valor', 0));
  numero2 = parseInt(prompt('Ingrese el segundo valor', 0));
}

document.write(numero1+" + "+numero2+" = "+(numero1+numero2)+"<br/>");
document.write(numero1+" - "+numero2+" = "+(numero1-numero2)+"<br/>");
document.write(numero1+" x "+numero2+" = "+(numero1*numero2)+"<br/>");
document.write(numero1+" / "+numero2+" = "+(numero1/numero2)+"<br/>");

alert(numero1+" + "+numero2+" = "+(numero1+numero2)+"\n"+
      numero1+" - "+numero2+" = "+(numero1-numero2)+"\n"+
      numero1+" x "+numero2+" = "+(numero1*numero2)+"\n"+
      numero1+" / "+numero2+" = "+(numero1/numero2));

console.log(numero1+" + "+numero2+" = "+(numero1+numero2));
console.log(numero1+" - "+numero2+" = "+(numero1-numero2));
console.log(numero1+" x "+numero2+" = "+(numero1*numero2));
console.log(numero1+" / "+numero2+" = "+(numero1/numero2));
