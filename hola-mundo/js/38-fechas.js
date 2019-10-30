'use strict';

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

console.log(`
  el año es ${year}
  el mes es ${mes + 1}
  el dia es ${dia}
  la hora es ${hora}
  los minutos son ${minutos}
  los segundos son ${segundos}
  `);

console.log(Math.ceil(Math.random() * 10000));
