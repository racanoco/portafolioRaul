// Mostramos el modal al hacer click en la imagen.
$(function(){
    $('.galeria .contenedor-imagen').on('click',function(){
        $('#modal').modal;
        // Guardamos la ruta de la imagen.
        var ruta_imagen = ($(this).find('img').attr('src'));
        $('#imagen-modal').attr('src', ruta_imagen);
    });

    // Cerrar el modal al clicar fuera de la imagen.
    $('#modal').on('click',function(){
        $('#modal').modal('hide');
    });
})