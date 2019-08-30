// Ejemplo Agenda Telefonica
var accion;
var agenda = [];
VerMenu();
while(accion != 0){
  switch(accion){
    case 1:
      Agregar();
      console.log(agenda);
      accion = 2;
      break;
    case 2:
      var nombre = 'Kevin';
      var numero = '00000000000';
      var existe = Editar(nombre,numero);
      if(existe){
        console.log('Numero modificado exitosamente');
      }
      else{
        console.log('El contacto no existe');
      }
      console.log(agenda);
      accion = 3;
      break;
    case 3:
      var nombre = 'Marco';
      var telefono_encontrado = Buscar(nombre);
      if(telefono_encontrado != ''){
        console.log('El numero de '+nombre+' es:'+telefono_encontrado);
      }
      else{
        console.log('El contacto no existe');
      }
      console.log(agenda);
      accion = 0;
      break;
    default:
      VerMenu();
      break;
  }
}



function VerMenu(){
  accion = 1;
}

function Editar(_nombre, _numero_nuevo){
  var encontrado = false;
  var contacto = [];
  for(var i=0;i<agenda.length;i++){
    contacto = agenda[i];
    if(contacto[0] === _nombre){
      agenda[i][1] = _numero_nuevo;
      encontrado = true;
    }
  }
  return encontrado;
}

function Buscar(_nombre){
  var telefono_encontrado = '';
  var contacto = [];
  for(var i=0;i<agenda.length;i++){
    contacto = agenda[i];
    if(contacto[0] === _nombre){
      telefono_encontrado = agenda[i][1];
    }
  }
  return telefono_encontrado;
}

function Agregar(){
  var contacto1 = ['Carlos','55867370'];
  var contacto2 = ['Marco','321654898'];
  var contacto3 = ['Kevin','321654898'];
  var contacto4 = ['Alex','321654898'];
  var contacto5 = ['Andres','321654898'];
  var contacto6 = ['Raquel','321654898'];
  var contacto7 = ['Jenner','321654898'];
  var contacto8 = ['Hugo','321654898'];
  agenda.push(contacto1);
  agenda.push(contacto2);
  agenda.push(contacto3);
  agenda.push(contacto4);
  agenda.push(contacto5);
  agenda.push(contacto6);
  agenda.push(contacto7);
  agenda.push(contacto8);
}