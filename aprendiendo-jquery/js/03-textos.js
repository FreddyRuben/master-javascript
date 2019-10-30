$(this).ready(() => {

    reloadLink();

    console.log($('a').length);
    let button = $('#add_button');
    let input = $('#add_link');
    button.removeAttr('disabled').click(function(){
        let val = input.val();
        $('#menu').append('<li><a href="'+val+'"></a></li>');
        input.val('');
        reloadLink();
    });

    function reloadLink(){
        $('a').each(function(index){
            let that = $(this);
            let enlace = that.attr('href');
            that.attr('target', '_blank');
            that.text(enlace);
        });
    }

});
