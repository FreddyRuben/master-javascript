$(this).ready(() => {

  // Selector de ID.
  $('#rojo').css('background', 'red')
            .css('color', 'white');

  $('#amarillo').css('background', 'yellow')
                .css('color', 'green');

  $('#verde').css('background', 'green')
             .css('color', 'white');

  // Selectores de clases.
  $('.sin-borde').click(function(){
    console.log(`click dado`);
    $(this).addClass('zebra');
  });

  // Selector de etiquetas.
  let parrafos = $('p').css('cursor', 'pointer');
  parrafos.click(function(){
    let that = $(this);
    if (!that.hasClass('grande')) {
      that.addClass('grande');
    }else{
      that.removeClass('grande');
    }
  });

  // Selector por atributos.
  $('[title = Google]').css('background', '#ccc');
  $('[title = Facebook]').css('background', 'blue')

  // Otros
  // $('p, a').addClass('margen-superior');

  let busqueda = $('#elemento2').parent().parent().find('.resaltado');

  console.log(busqueda);

});
