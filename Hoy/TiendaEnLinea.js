var productos = {
    'juegos de mesa': [
    {'nombre': 'Catan',
    'precio': 375,
    },
    {'nombre': 'Ticket to ride',
    'precio': 300,
    },
    {'nombre': 'Pandemic',
    'precio': 350,
    }
    ],
    'coleccionables': [
    {'nombre': 'Sobre de Magic',
    'precio': 20,
    },
    {'nombre': 'Sobre de Pokemon',
    'precio': 20,
    }
    ],
    'juegos de cartas': [
    {'nombre': 'Sushi Go!',
    'precio': 150,
    },
    {'nombre': 'Werewolf',
    'precio': 200,
    },
    {'nombre': 'Bang! The card game',
    'precio': 200,
    }
    ]
    }

    var carrito = [];
    var total;
    
    do{
       console.log('Bienvenido a BoardGames. Tenemos los mejores juegos para ti.');
       var input_categoria = prompt('Para empezar elije una de las siguientes categorias: juegos de mesa, coleccionables, juegos de cartas.');
    
       switch (input_categoria){
       case "juegos de mesa":
         for(var i=0; i<productos['juegos de mesa'].length; i++){
         console.log(productos['juegos de mesa'][i]);
       }
       break;
       case "coleccionables":
         for(var i=0; i<productos['coleccionables'].length; i++){
         console.log(productos['coleccionables'][i]);
       }
       break;
       case "juegos de cartas":
         for(var i=0; i<productos['juegos de cartas'].length; i++){
         console.log(productos['juegos de cartas'][i]);
       }
       break;
       default:
         console.log('Esa categoria no existe.');
       }
    
       var input_nombre_juego = prompt('Qué juego deseas comprar?');
       var input_cantidad_juego = prompt('Cuantos deseas?');
       carrito.push(input_nombre_juego, input_cantidad_juego);
    
    }while (confirm('Quieres elejir mas juegos?'));
    
    
    for (var i=0; i<carrito.length; i++){
       var subtotal = carrito[i][1]*productos[i][1];
       total += subtotal;
       console.log('Total de compra: ' + total);
    }
    
    if (total > 250){
       var total_descuento = total/100*85;
       console.log('Tu compra es mayor a Q.250, asi que tu compra aplica para el descuento de 15%. Tu total es de: Q.' + total_descuento);
    }