'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
  console.log("Fruta1: ", fruta1);
  console.log("Fruta2: ", fruta2);
  console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];

listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");
