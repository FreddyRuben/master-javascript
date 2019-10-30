$(this).ready(() => {
  let caja = $('#caja');
  $('#mostrar').hide();

  $('#mostrar').click(() => {
    $('#mostrar').hide();
    $('#ocultar').show();

    caja.slideDown('slow', () => {
      console.log("Calter mostrado");
    });
  });
  $('#ocultar').click(() => {
    $('#ocultar').hide();
    $('#mostrar').show();

    caja.slideUp('slow', () => {
      console.log("Calter ocultado");
    });
  });

  $('#todoenuno').click(() => {
    caja.slideToggle('fast');
  });

  $('#animar').click(() => {
    caja.animate({
                  marginLeft: '500px',
                  fontSize: '40px',
                  height: '110px'
                  }, 'slow')
        .animate({
                  marginTop: '350px',
                  borderRadius: '900px'
                  }, 'slow')
        .animate({
                  marginLeft: '0px',
                  borderRadius: '0px'
                  }, 'slow')
        .animate({
                  marginTop: '15px',
                  borderRadius: '30px'
                  },'slow')
  });
});
