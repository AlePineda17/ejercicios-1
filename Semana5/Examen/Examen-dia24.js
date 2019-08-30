var preguntas = [
    {
    'pregunta': 'Como se le llama al proceso en el cual se unen dos atomos con nucleos mas ligeros para formar un atomo con un nucleo mas pesado?',
    'tipo': 'directa',
    'respuestas': 'Fusion',
    },
    {
    'pregunta': 'Tradicionalmente (ano 1516), cuantos ingredientes se utilizan en la creacion de cerveza.',
    'tipo': 'opcion',
    'respuestas': [
        {
        'valor': '2',
        'correcta': false,
        },
        {
        'valor': '4',
        'correcta': false,
        },
        {
        'valor': '3',
        'correcta': true,
        },
        {
        'valor': '6',
        'correcta': false,
        },
       ],
    },
    {
    'pregunta': 'Cuantas vidas tiene un gato?',
    'tipo': 'directa',
    'respuestas': '9',
    },
    {
    'pregunta': 'Existe un ser superior?',
    'tipo': 'opcion',
    'respuestas': [
        {
        'valor': 'Si',
        'correcta': false,
        },
        {
        'valor': 'No',
        'correcta': false,
        },
      ],
    },
    {
    'pregunta': 'Cual de estas plantas no florea?',
    'tipo': 'opcion',
    'respuestas': [
        {
        'valor': 'Nymphaeales',
        'correcta': false,
        },
        {
        'valor': 'Marchantia',
        'correcta': true,
        },
        {
        'valor': 'Chloranthales',
        'correcta': false,
        },
        {
        'valor': 'Ceratophyllum',
        'correcta': false,
        },
        {
        'valor': 'Amborella',
        'correcta': false,
        },
      ],
    },
    {
    'pregunta': 'Que colores debes mezclar para hacer morado?',
    'tipo': 'seleccion',
    'respuestas': [
        {
        'valor': 'Azul',
        'correcta': true,
        },
        {
        'valor': 'Rojo',
        'correcta': true,
        },
        {
        'valor': 'Amarillo',
        'correcta': false,
        },
        {
        'valor': 'Verde',
        'correcta': false,
        },
        {
        'valor': 'Cafe',
        'correcta': false,
        },
        {
        'valor': 'Blanco',
        'correcta': false,
        },
      ],
    },
    {
    'pregunta': 'Quienes acompanaron a Frodo en las primerass etapas de su trayecto hacia Mordor?',
    'tipo': 'seleccion',
    'respuestas': [
        {
        'valor': 'Gandalf',
        'correcta': true,
        },
        {
        'valor': 'Theodin',
        'correcta': false,
        },
        {
        'valor': 'Merry',
        'correcta': true,
        },
        {
        'valor': 'Faramir',
        'correcta': false,
        },
        {
        'valor': 'Aragorn',
        'correcta': true,
        },
        {
        'valor': 'Arwen',
        'correcta': false,
        },
      ],
    },
];

function PruebaEnLinea(preguntas){
    let div_prueba = document.getElementById('div_prueba');
    let titulo_prueba = `<h1 style="color:blue;">Prueba en linea</h1>
                         <h3 style="color:red;">Responde a las siguientes preguntas. Obtendras 10 puntos por cada respuesta correcta.</h3><br>`;
    div_prueba.insertAdjacentHTML("beforebegin", titulo_prueba);    
    let radio_i = 0;
    let checkbox_i = 0;
    let text_i = 0;                    
    for (i = 0; i < preguntas.length; i++){
        prueba_html = `<br><div style="font-weight:bold;">${preguntas[i]['pregunta']}</div><br>`;
        switch (preguntas[i]['tipo']){
            case 'opcion':
                for (j = 0; j < preguntas[i]['respuestas'].length; j++){
                  prueba_html += `<div>
                                      <input type="radio" name="opcion_multiple${radio_i}" id="opcion_multiple${radio_i}" onchange="Verify(${i})">
                                      <label for="opcion_multiple${radio_i}]">${preguntas[i]['respuestas'][j]['valor']}</label>
                                  </div>`;
                  radio_i++;
                }                
                break;                   
            case 'seleccion': 
                for (j = 0; j < preguntas[i]['respuestas'].length; j++){
                  prueba_html += `<div>
                                      <input type="checkbox" name="multiples_respuestas${checkbox_i}" id="multiples_respuestas${checkbox_i}}" onchange="Verify(${i})">
                                      <label for="multiples_respuestas${checkbox_i}}">${preguntas[i]['respuestas'][j]['valor']}</label>
                                  </div>`;
                  checkbox_i++;                
                }                  
                break;                        
            default: 
                prueba_html += `<div>
                                    <label for="ingresar_respuesta"></label>
                                    <input type="text" name="ingresar_respuesta${text_i}" id="ingresar_respuesta${text_i}" onchange="Verify(${i})">
                                </div>`;
                text_i++;                
                break;                    
        }
        div_prueba.insertAdjacentHTML("beforeend", prueba_html);
    }   
    let boton = `<br><button onclick="Verify(i)">Corregir</button>`;
    div_prueba.insertAdjacentHTML("beforeend", boton);
}

PruebaEnLinea(preguntas);

function Verify(_indice){
    let nota = 100; 
    if (document.getElementById("ingresar_respuesta${text_i}").value != preguntas[i]['respuestas']) {
        nota -= (100 - (100/7));
    }
    else if (document.getElementById("opcion_multiple${radio_i}").checked != true) {
        nota -= (100 - (100/7));
    }  
    else if (document.getElementById("multiples_respuestas${checkbox_i}").checked != true) {
        nota -= (100 - (100/7));
    }
    else {
        nota;
    }
    return nota;
}
