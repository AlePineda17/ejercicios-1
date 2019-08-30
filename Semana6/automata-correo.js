// Automata
/*var cadena = 'crafaellsos@gmail.com.gt';
var cadena_array = cadena.split('');
var sub_cadena = '';
var resultado = '';
var estado = 0;
var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(var i=0;i<cadena_array.length;i++){
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
            else if(caracter == '@'){
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
            else if(caracter == '.'){
                sub_cadena += caracter;
                estado = 4;
            }
            else{
                estado = 100;
            }
            break;
        case 4:
            if(letras.indexOf(caracter) > -1){
                sub_cadena += caracter;
                estado = 5;
            }
            else{
                estado = 100;
            }
            break;
        case 5:
            if(letras.indexOf(caracter) > -1){
                sub_cadena += caracter;
                estado = 5;
            }
            else if(caracter == '.'){
                sub_cadena += caracter;
                estado = 4;
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
if(estado != 5){
    resultado = 'Error. Cadena no valida:'+ sub_cadena;
}*/
//console.log(resultado);

// Expresion regular
var patron = /[a-z]+@[a-z]+\.[a-z]+(\.[a-z]+)*/;

var resultado = patron.exec('alexis@gmail.com');

console.log(resultado);

