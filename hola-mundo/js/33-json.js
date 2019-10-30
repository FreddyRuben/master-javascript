'use strict'

//JSON - JavasScript Object Notation

var pelicula = {
  titulo: 'Batman vs Superman',
  year: 2017,
  pais: 'Estados Unidos'
};

var peliculas = [
  {titulo: "La verdad duele", year: 2017, pais: "Francia"},
  pelicula
];

var lista = document.querySelector('#peliculas');

peliculas.forEach((elemento) =>{
  var parrafo = document.createElement('p');
  parrafo.append(`${elemento.titulo} ${elemento.year}`);
  lista.append(parrafo);
});
