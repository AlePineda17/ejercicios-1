class Animal{
    constructor(especie, nombre, patas){
     this.especie = especie;
     this.nombre = nombre;
     this.patas = patas;
    }
}

let animal1 = new Animal('felino', 'gato', '4');

console.log(animal1.nombre);


class Perro{
    constructor(raza, tamano, color){
        this.raza = raza;
        this.tamano = tamano;
        this.color = color;
    }
    comida(){
        console.log('2 veces por dia.');
    }
    paseo(){
        console.log('3 veces por dia.');
    }
}

let perro1 = new Perro('pomeranian', 'toy', 'blanco');
let perro2 = new Perro('beagle', 'mediano', 'manchado');
let perro3 = new Perro('husky', 'grande', 'blanco');

console.log(perro1.raza);
perro1.comida();


class Gato{
    constructor(raza, tamano, color){
        this.raza = raza;
        this.tamano = tamano;
        this.color = color;
    }
    arena(){
        console.log('Cambiar 1 vez por semana.');
    }
    comida(){
        console.log('Todo el dia.');
    }
}

let gato1 = new Gato('bengali', 'grande', 'rayado');
let gato2 = new Gato('persa', 'mediano', 'gris');
let gato3 = new Gato('esfinge', 'mediano', 'piel');

console.log(gato2.raza, gato2.color, gato1.tamano);
console.log(gato1.raza, gato1.tamano);