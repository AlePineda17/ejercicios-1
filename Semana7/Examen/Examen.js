// Cambiar de pagina
var pagina_actual = 1;

function CambiarPagina (){
    $('#boton_siguiente').on(click => {
        $('#pagina-'+pagina_actual).removeClass('activo');
        $('#pagina-'+pagina_actual).addClass('inactivo');
        pagina_actual++;
    });
    $('#boton_anterior').on(click => {
        $('#pagina-'+pagina_actual).removeClass('activo');
        $('#pagina-'+pagina_actual).addClass('inactivo');
        pagina_actual--;
    });
}


// Validacion nombre y apellido
var patron_nombre = /[a-z]+/;
var input_nombre = $('#txt_nombre').val;
var resultado_nombre = patron_nombre.exec(input_nombre);

var input_apellido = $('#txt_apellido').val;
var resultado_apellido = patron_nombre.exec(input_apellido);


// Validacion edad
var patron_edad = /[0-9][0-9][0-9]/;
var input_edad = $('#txt_edad').val;
var resultado_edad = patron_edad.exec(input_edad);


// Validacion DPI
var patron_dpi = /[0-9][0-9][0-9][0-9] [0-9][0-9][0-9][0-9][0-9] +0101/;
var input_dpi = $('#txt_dpi').val;
var resultado_dpi = patron_dpi.exec(input_dpi);


// Validacion telefono
var patron_telefono = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
var input_telefono = $('#txt_telefono').val;
var resultado_telefono = patron_telefono.exec(input_telefono);


// Validacion correo electronico
var patron_correo = /[a-z]+@[a-z]+\.[a-z]+(\.[a-z]+)*/;
var input_correo = $('#txt_correo').val;
var resultado_correo = patron_correo.exec(input_correo);
