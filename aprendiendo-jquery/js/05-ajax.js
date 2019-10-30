$(this).ready(() => {

    // Load
    // $('#datos').load('https://reqres.in');

    // get y post
    $.get('https://reqres.in/api/users', {page: 2}, (res) => {
        res.data.forEach((element) => {
            $('#datos').append(`<p>${element.first_name} ${element.last_name}</p>`);
        });
    });

    $('#form').submit(function(event) {
        event.preventDefault();
        let user = {
            "name": $('input[name="name"]').val(),
            "email": $('input[name="email"]').val()
        };
        console.log(user);
    
        // $.post($(this).attr('action'), user, (res) => {
        //     console.log(res)
        // }).done(() => {
        //     alert("Usuario agregado correctamente");
        // });

        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: "usuario",
            beforeSend: function(){
                console.log('Enviando usuario');
            },
            succes: function(res){
                console.log(res);
            },
            error: function(){
                console.log('Ha ocurrido un error');
            },
            timeout: 2000
        });

        return false;
    });

});
