const peliculas = {
	'Fantasia' : {
		 'Aventura' : {
			'Harry Potter y la piedra filosofal' : {
				calificacion: 8,
				ano: 2001,
				duracion: 152,
				actores: ['Daniel Radcliffe',
                    'Rupert Grint',
                    'Emma Watson']
            }
            'Harry Potter y la camara secreta' : {
				calificacion: 8.1,
				ano: 2002,
				duracion: 161,
				actores: ['Daniel Radcliffe',
                    'Rupert Grint',
                    'Emma Watson']
            }
            'Harry Potter y el prisionero de Azkaban' : {
				calificacion: 9.1,
				ano: 2004,
				duracion: 142,
				actores: ['Daniel Radcliffe',
                    'Rupert Grint',
                    'Emma Watson']
            }
            'El senor de los anillos' : {
				calificacion: 9,
				ano: 2001,
				duracion: 178,
				actores: ['Elijah Wood',
                    'Ian McKellen', 
                    'Liv Tyler',
                    'Viggo Mortensen',
                    'Sean Astin',
                    'Cate Blanchett',
                    'John Rhys-Davies',
                    'Billy Boyd',
                    'Dominic Monaghan',
                    'Orlando Bloom',
                    'Christopher Lee',
                    'Hugo Weaving',
                    'Sean Bean',
                    'Ian Holm',
                    'Andy Serkis']
            }
		}
    }
    'Terror' : {
		'Slacher' :{
			'Psycho' = {
				calificacion: 8.5,
				ano: 1960,
				duracion: 109,
				actores: ['Anthony Perkins',
                    'Janet Leigh',
                    'Vera Miles',
                    'John Gavin',
                    'Martin Balsam',
                    'John McIntire']
            }
            'Viernes 13' : {
				calificacion: 7,
				ano: 1980,
				duracion: 88,
				actores: ['Betsy Palmer',
                    'Adrienne King',
                    'Harry Crosby',
                    'Laurie Bartram',
                    'Mark Nelson',
                    'Jeannine Taylor',
                    'Robbi Morgan',
                    'Kevin Bacon']
			}
		}
    }
    'Comedia' : {
		'Comedia Romantica' : {
			'El diario de Bridget Jones' : {
				calificacion: 8,
				ano: 2001,
				duracion: 97,
                actores: ['Renée Zellweger', 
                    'Colin Firth', 
                    'Hugh Grant']
            }
            'Amelie' : {
				calificacion: 7,
				ano: 2001,
				duracion: 122,
				actores: ['Audrey Tautou',
                    'Mathieu Kassovitz',
                    'Rufus',
                    'Lorella Cravotta']
			}
		}
	}
}

function Recomendaciones(){
    for (genero in peliculas){
        for (subgenero in peliculas[genero]){
         if (input_genero == peliculas[genero][subgenero]){
         console.log('Te recomendamos estas peliculas: ' + peliculas[genero][subgenero]);
         }
         else if (input_subgenero == peliculas[genero][subgenero]){
            console.log('Te recomendamos estas peliculas: ' + peliculas[genero][subgenero]);
         } 
         else if (input_actor == peliculas[genero][subgenero]){
            console.log('Te recomendamos estas peliculas: ' + peliculas[genero][subgenero]);
         } 
         else {
         console.log('Lo sentimos. Por el momento no tenemos recomendaciones para ti. Intentalo mas tarde.')
         }    
        }
    }    
}

function Recomendaciones(){
    for (genero in peliculas){
        for (subgenero in peliculas[genero]){
         (input_genero == peliculas[genero][subgenero])?
         console.log('Te recomendamos estas peliculas: ' + peliculas[genero][subgenero]);
         }
         else if (input_subgenero == peliculas[genero][subgenero]){
            console.log('Te recomendamos estas peliculas: ' + peliculas[genero][subgenero]);
         } 
         else if (input_actor == peliculas[genero][subgenero]){
            console.log('Te recomendamos estas peliculas: ' + peliculas[genero][subgenero]);
         } 
         else {
         console.log('Lo sentimos. Por el momento no tenemos recomendaciones para ti. Intentalo mas tarde.')
         }    
        }
    }    
}

console.log('Bienvenido a BestMovies.');

var input_genero = prompt('Filtrar por genero - Escribe el genero deseado:');
var input_subgenero = prompt('Filtrar por subgenero - Escribe el subgenero deseado:');
var input_actor = prompt('Filtar por actor - Escribe el nombre del actor que desees ver:');

