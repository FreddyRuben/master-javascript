'use strict'

//Localstorage


// Comprobar disponibilidad del localstorage
if (typeof(Storage) !== 'undefined') {
  console.log("LocalStorage disponible");
}else {
  console.log("Incompatible con LocalStorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

// Recuperar elemnto
document.querySelector('#peliculas').innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
  nombre: "Victor Robles",
  email: "victor@victor.com",
  web: "victorroblesweb.es"
}

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar Objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

localStorage.clear();
