var cadena = 'Alexis Michelle Pineda Menendez';
var cadena_array = cadena.split('');
var sub_cadena = '';
var resultado = '';
var estado = 0;
var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(var i = 0; i < cadena_array.length; i++){
    var caracter = cadena_array[i];
    switch(estado){
        case 0:
            if(letras.indexOf(caracter) > -1){
                sub_cadena += caracter;
                estado = 1;
            }
            else{
                estado = 100;
            }
            break;
        case 1:
            if(letras.indexOf(caracter) > -1){
                sub_cadena += caracter;
                estado = 1;
            }
            else if(caracter == ' '){
                sub_cadena += caracter;
                estado = 2;
            }
            else{
                estado = 100;
            }
            break;
        case 2:
            if(letras.indexOf(caracter) > -1){
                sub_cadena += caracter;
                estado = 3;
            }
            else{
                estado = 100;
            }
            break;
        case 3:
            if(letras.indexOf(caracter) > -1){
                sub_cadena += caracter;
                estado = 3;
            }
            else if(caracter == ' '){
                sub_cadena += caracter;
                estado = 2;
            }
            else{
                estado = 100;
            }
            resultado = 'Cadena valida: '+ sub_cadena;
            break;
        case 100:
            resultado = 'Error. Cadena no valida:'+ sub_cadena;
            break;
    }
}
if(estado != 3){
    resultado = 'Error. Cadena no valida:'+ sub_cadena;
}

console.log(resultado);

// Expresion regular
var patron = /[a-z]+z[a-z]*/;

var resultado = patron.exec('zaaaaaaaa');

console.log(resultado);