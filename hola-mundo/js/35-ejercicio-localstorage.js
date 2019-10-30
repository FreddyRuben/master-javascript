'use strict'

var formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit', ()=>{
  var titulo = document.querySelector('#addpelicula').value;

  if (titulo.length > 0) {

    localStorage.setItem(titulo, titulo);
  }
});

for (var i in localStorage) {
  console.log(localStorage[i]);
  if (typeof(localStorage[i]) == 'string') {

    var li = document.createElement('li');
    li.append(localStorage[i]);
    document.querySelector('#peliculas-list').append(li);
  }

}

var formularioBorrar = document.querySelector('#formBorrarPeliculas');
formularioBorrar.addEventListener('submit', () => {
  var tituloB = document.querySelector('#borrarPelicula').value;
  localStorage.removeItem(tituloB);
});
