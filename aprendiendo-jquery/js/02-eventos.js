$(this).ready(function(){

    // MouseOver y MouseOut
    let caja = $('#caja');

    // caja.mouseover(()=>{
    //     caja.css('background', 'red');
    // });

    // caja.mouseout(function(){
    //     $(this).css('background', 'green');
    // });

    function cambiaRojo(){
        $(this).css('background', 'red');
    }

    function cambiaVerde(){
        $(this).css('background', 'green');
    }

    // Hover
    caja.hover(cambiaRojo, cambiaVerde);

    // Click, doble click
    caja.click(function(){
        $(this).css('backgroundColor', 'blue')
               .css('color', 'white');
    });

    caja.dblclick(function(){
        $(this).css('background', 'pink')
               .css('color', 'yellow');
    });

    // Focus y blur
    let nombre = $('#nombre');

    nombre.focus(function(){
        $(this).css('border', '2px solid green');
    });

    nombre.blur(function(){
        $(this).css('border', '1px solid #ccc');
        $('#datos').text(nombre.val()).show();
    });

    // Mousedown y mouseup
    let datos = $('#datos');

    datos.mousedown(function(){
      $(this).css('border', '4px dashed #cccccc');
    });

    datos.mouseup(function(){
      $(this).css('border', '4px dashed black');
    });

    // Mousemove
    $(this).mousemove(function(){
      $('body').css('cursor', 'none');
      $('#sigueme').css('left', event.clientX)
                   .css('top', event.clientY);
    });

});
