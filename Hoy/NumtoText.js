var input_numero = prompt('Ingresa un numero');

var cifra = input_numero.split('');

console.log(cifra);

for (var i=0; i<cifra.length; i++){
   if (cifra = [1,2,3,4,5,6,7,8,9,0]){
    switch(cifra){
        case 1: console.log('uno');
        case 2: console.log('dos');
        case 3: console.log('tres');
        case 4: console.log('cuatro');
        case 5: console.log('cinco');
        case 6: console.log('seis');
        case 7: console.log('siete');
        case 8: console.log('ocho');
        case 9: console.log('nueve');
   }
   
   else if (cifra[0][1]){
    return
   }

   else if (cifra[0][1][2]){
    return
   }

   else if (cifra[0][1][2]){
    return
   }

  else {
      console.log('Ingresa un numero entero.');
  }


// if cifra 1 num - solo debe decir nb numero   
// if cifra 2 nums - 0=decena y 1=num
// if cifra 3 nums - 0=centena, 1=decena, 2=num
// cifra son arrays, si meto condicionales dentro de for loop 
//para que identifique arrays necesarias

/*
}