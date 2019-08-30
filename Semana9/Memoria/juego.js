let jugador = prompt('A quien le toca?');
const jugadores = {};

const cartas = {
	'carro': {
  	'img': 'https://png.pngtree.com/svg/20170522/6d230b748b.svg',
    'puntos': 2,
    'jugador': null
  },
  'einstein': {
  	'img': 'https://png.pngtree.com/svg/20170522/6d230b748b.svg',
    'puntos': 1,
    'jugador': null
  },
  'pinguino': {
  	'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/768px-Icons8_flat_linux.svg.png',
    'puntos': 3,
    'jugador': null
  },
  'doctor': {
  	'img': 'https://png.pngtree.com/svg/20170522/6d230b748b.svg',
    'puntos': 1,
    'jugador': null
  },
};

let seleccion = [];

$( '.carta' ).click(function() {

	// Extraer el valor de la carta.
  let carta = $(this);

	// Verificar que la carta este cerrada.
	if ($(this).hasClass('cerrada')) {
  
  	// Insertar valor de carta a cartas seleccionadas.
    seleccion.push($(this));
  
  	// Abrir la carta.
    $(this).removeClass('cerrada').addClass('abierta');
    let imagen = cartas[carta.data('carta')]['img'];
    $(this).children('img').attr('src', imagen);
    
  }
  
  // Comparar cartas si hay dos abiertas.
  if (seleccion.length == 2) {
      seleccion[0].data('carta') == seleccion[1].data('carta') ? dar_puntos(carta) : cerrar_cartas(seleccion);
      seleccion = [];
    }
});

function dar_puntos(carta_seleccionada) {
	let tipo_carta = carta_seleccionada.data('carta');
  
	cartas[tipo_carta]['jugador'] = jugador;
  
  if (jugador in jugadores){
    jugadores[jugador] += cartas[tipo_carta]['puntos'];
  }
  else {
    jugadores[jugador] = cartas[tipo_carta]['puntos'];
  }
  
  // Revisar si termino el juego.
  if ($('.cerrada').length == 0) {
    let highscore = 0;
    let ganador;
    for (var jugador in jugadores) {
    	if (jugadores[jugador] > highscore) {
      	highscore = jugadores[jugador];
      	ganador = jugador;
      }
    }
    alert('Gano ' + ganador + ' con ' + highscore + ' puntos!');
  }
}

function cerrar_cartas(cartas) {
	for (var carta_seleccionada in cartas) {
  	cartas[carta_seleccionada].removeClass('abierta').addClass('cerrada');
    cartas[carta_seleccionada].children('img').attr('src', 'https://img.icons8.com/cotton/2x/brain-3.png');
  }
  jugador = prompt('A quien le toca?');
}