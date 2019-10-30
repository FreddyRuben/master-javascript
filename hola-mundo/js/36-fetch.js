'use strict';

// Fetch (ajax) y peticiones a servicios / api rest

let usr = document.querySelector('#usuarios');
let usrJanet = document.querySelector('#janet');
let profesor = document.querySelector('#profesor');

getUsuarios()
    .then(data => data.json())
    .then(users =>{
        listadoUsuarios(users.data);
        return getInfo()
    })
    .then(data => {
       profesor.innerHTML = data;
       return getJanet()
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user);
    })
    .catch(error => {
        alert(`Error en las peticiones: ${error}`);
    })

function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function getInfo(){

    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robless',
        url: 'https://victorroblessweb.es'
    };
    return new Promise((resolve, reject) => {
      var profesor_string = '';

      setTimeout(() => {
        profesor_string = JSON.stringify(profesor);
        if(typeof profesor_string != 'string' || profesor_string == '') return reject('erRor');

        return resolve(profesor_string);
      }, 3000);
    }
  );
}

var listadoUsuarios = (usuarios) => {
    usuarios.map((users, i) => {
        let prrf = document.createElement('p');
        let content = document.createTextNode(`${i} ${users.first_name} ${users.last_name}`);
        prrf.appendChild(content);
        usr.appendChild(prrf);

        let load = document.querySelector('#loading');
        load.style.display = 'none';

    });
};

var mostrarJanet = (user) => {
    console.log(user);
    usrJanet.innerHTML = user.data.first_name;
    let img = document.createElement('img');
    img.src = user.data.avatar;
    img.width = '100';
    let br = document.createElement('br');
    usrJanet.appendChild(br);
    usrJanet.append(img);
};
