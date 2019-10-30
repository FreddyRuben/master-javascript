$(document).ready(() => {

    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Resimensionar
    $('.elemento').resizable();

    // Seleccionar y ordenar
    // $('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update: function(event, ui){
            console.log('Ha cambiado la lista');
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log('Has soltado un elemento dentro del area');
        }
    });

    // Efectos
    $('#mostrar').click(() =>{
        $('#caja-efectos').toggle('shake', 4000);
    });

    // Tooltip
    $(document).tooltip();

    // Cuadros de dialogos
    $('#lanzar-popup').click(
        function(){
            $('#popup').dialog();
        }
    )
    // Calendario
    $('#calendario').datepicker();

    $('#pestanas').tabs();

});