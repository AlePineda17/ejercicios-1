const peliculas = {
    'Fantasia' : {
      'Aventura' : { 
        'Harry Potter y la piedra filosofal',
        'Harry Potter y la camara secreta',
        'Harry Potter y el prisionero de Azkaban',
        'El senor de los anillos',
        }
    }
    'Terror' : {
      'Slacher' : {
        'Psycho',
        'Viernes 13',
        }
    }    
    'Comedia' : {
      'Comedia Romantica' : {
        'El diario de Bridget Jones',
        'Amelie',
        }
    }
}       

function TablaPeliculas(){
  var tabla_html = '<table border="1">';
  for (genero in peliculas)
    tabla_html += '<tr></tr>';
    for (subgenero in peliculas[genero])
      tabla_html += '<td></td>';
      for (nombre in peliculas[genero][subgenero])
        tabla_html += '<td></td>';
  var contenedor = document.getElementById('div_tabla');
  contenedor.innerHTML = tabla_html;
}