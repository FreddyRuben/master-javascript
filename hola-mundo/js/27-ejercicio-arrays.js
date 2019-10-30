'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todo sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenar y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorara el uso de funcione)
*/

var mostrarArray = (elemento, textoCustom = "") =>{
  document.write(`<h1>Contenido del array${textoCustom}</h1>`);
  document.write('<ul>')
  array.forEach(elemento => document.write(`<li>${elemento}</li>`));
  document.write('</ul>');
}

// Pedir 6 numeros
var elemento;
var cantidad = 0;
var array = [];

do {

  elemento = Number(prompt("Introduce un numero"));
  array.push(elemento);
  cantidad++;
} while (cantidad < 6);

alert("Todos los elementos han sido introducidos");

// Mostrar array por la consola
console.log(array);

// Mostrar array en el cuerpo de la pagina
mostrarArray(array);

// Ordenar y mostrarlo
array.sort((a, b) => a-b);
mostrarArray(array, " en forma ordenada");
console.log(array);

// Invertir su orden y mostrarlo
array.reverse(array);
mostrarArray(array, " de mayor a menor");
console.log(array);

document.write(`<h1>El array tiene ${array.length} elementos</h1>`);
console.log(array.length);

// Busqueda de un valor introducido por el usuario
var entrada = parseInt(prompt('Introduce un elemento para verificar si existe en el array', 0));

if (array.indexOf(entrada) > -1){
  alert(`Ese elemento esta en el indice ${array.indexOf(entrada)}`);
}else{
  alert(`Ese elemento no existe`);
}
