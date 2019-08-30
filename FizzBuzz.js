var fizz_buzz_array = [1, 3, 'carro', [3, 7, 'perro'], [12, 'manzana', 42], 21, 'arbol'];

function FB(fizz_buzz_array){
    for (var i=0; i<fizz_buzz_array.length; i++){
        if (typeof fizz_buzz_array[i] === 'number'){
            if ((fizz_buzz_array[i] % 3 === 0) && (fizz_buzz_array[i] % 7 === 0)){
            console.log(FizzBuzz);    
            } 
            else if (fizz_buzz_array[i] % 7 === 0){
            console.log(Buzz);    
            }
            else if (fizz_buzz_array[i] % 3 === 0){
                console.log(Fizz);
            }
        }
        else if(typeof fizz_buzz_array[i] == 'array'){
            if ((fizz_buzz_array[i] % 3 === 0) && (fizz_buzz_array[i] % 7 === 0)){
                console.log(FizzBuzz);    
            } 
            else if (fizz_buzz_array[i] % 7 === 0){
            console.log(Buzz);    
            }
            else if (fizz_buzz_array[i] % 3 === 0){
            console.log(Fizz);
            }
            else {
                console.log('Este valor no es un numero.');
            }
        }    
        else {
        console.log('Este valor no es un numero.');
        }
    }
}

function FB(fizz_buzz_array){
    for (var i=0; i<fizz_buzz_array.length; i++){
        if (typeof fizz_buzz_array[i] == 'number'){
            ((fizz_buzz_array[i] % 3 === 0) && (fizz_buzz_array[i] % 7 === 0))?console.log(FizzBuzz):(fizz_buzz_array[i] % 7 === 0)?console.log(Buzz):(fizz_buzz_array[i] % 3 === 0)?console.log(Fizz);
        }
        else if(typeof fizz_buzz_array[i] == 'array'){
            ((fizz_buzz_array[i] % 3 === 0) && (fizz_buzz_array[i] % 7 === 0))?console.log(FizzBuzz):(fizz_buzz_array[i] % 7 === 0)?console.log(Buzz):(fizz_buzz_array[i] % 3 === 0)?console.log(Fizz):console.log('Este valor no es un numero.');
        }    
        else {
        console.log('Este valor no es un numero.');
        }
    }
}


FB(fizz_buzz_array);

function sumar_salarios_ninja(objeto){

	let total = 0;
	for (sub_objeto in objeto){
		(typeof objeto[sub_objeto] == 'object') ? total += sumar_salarios(objeto[sub_objeto]):
		(typeof objeto[sub_objeto] == 'number')? total += objeto[sub_objeto]:
		console.log('Este valor no es un salario.');
	}

	return total;

}


//Extra

var fizz_buzz_array = [1, 3, 'carro', [3, [3, 21, 'gato'], 'perro'], [12, 'manzana, 42], 21, 'arbol'];
