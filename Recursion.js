function Imprimir_Numero(numero){
    console.log(numero);
    if (numero>0){
        Imprimir_Numero(numero -1);
    }
    console.log('regresar ' + numero);
}

Imprimir_Numero(5);

// El valor de un numero base elevado a un exponente (n^m)

function Imprimir_Exponente(numero, potencia){
    var exponente = numero^potencia
    console.log(exponente);

}

Imprimir_Exponente(2,2);

//El valor del factorial de un numero (n!)

function Imprimir_Factorial(numero){
   if (numero == 1){
       return 1;
   }
   return numero * Imprimir_Factorial(numero -1);
}

Imprimir_Factorial(5);