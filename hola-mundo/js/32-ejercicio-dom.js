'use strict'

window.addEventListener('load', () => {

  var div = document.createElement('div')
  div.className = 'resultados';
  document.querySelector('body').appendChild(div);
  var resultados = document.querySelector('.resultados');
  resultados.style.textAlign = 'center';
  resultados.style.display = 'none';

  var nombre = document.querySelector('#campo-nombre');
  var apellidos = document.querySelector('#campo-apellidos');
  var edad = document.querySelector('#campo-edad');
  nombre.focus();

  form.addEventListener('submit', () => {

    let nodoNombre = document.createTextNode(`Nombre: ${nombre.value}`);
    let nodoApellidos = document.createTextNode(`Apellidos: ${apellidos.value}`);
    let nodoEdad = document.createTextNode(`Edad: ${edad.value}`);
    let nodoTitulo = document.createTextNode('Informacion del usuario');

    var nodos = [nodoNombre, nodoApellidos, nodoEdad];

    var indicador = true;

    if (nombre.value < 2 || nombre.value == null) {
      indicador = false;
      if (indicador == false) {
        nombre.style.borderColor = 'red';
        alert("El campo nombre no es correcto");
        nombre.focus();
        nombre.addEventListener('keypress', () => {
          nombre.style.borderColor = '';
        });
      }
    }else{
      nombre.style.border = '';
    }

    if (indicador == true) {
      if (apellidos.value < 2 || apellidos == null) {
        indicador = false;
        if (indicador == false) {
          apellidos.style.borderColor = 'red';
          alert("El campo apellidos no es correcto");
          apellidos.focus();
          apellidos.addEventListener('keypress', () => {
            apellidos.style.borderColor = '';
          });
        }
      }else{
        apellidos.style.borderColor = '';
      }
    }

    if (indicador == true) {
      if (edad.value == 0) {
        indicador = false;
        if (indicador == false) {
          edad.style.borderColor = 'red';
          alert("El campo edad no es correcto");
          edad.focus();
          edad.addEventListener('keypress', () => {
            edad.style.borderColor = '';
          });
        }
      }else{
        edad.style.borderColor = '';
      }
    }

    if (indicador == true){
      var h2 = document.createElement('h2');
      var hr = document.createElement('hr');
      div.appendChild(h2);
      div.appendChild(hr);
      h2.appendChild(nodoTitulo);
      resultados.style.display = 'block';
      nodos.forEach((elemento) => {
        var parrafo = document.createElement('p');
        div.appendChild(parrafo);
        parrafo.appendChild(elemento);
      });
    }
  }); // Fin del evento submit
}); // Fin del evento load
