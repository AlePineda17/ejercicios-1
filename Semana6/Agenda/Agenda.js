var agenda = [];

function GuardarContacto() {
    let tabla = getElementByTagName('table');
    let nombre = getElementById("nombre");
    let numero = getElementById("numero");
    agenda.push(nombre, numero)
    agenda.forEach(contacto => {
        const tr = document.createElement('tr');
        tabla.append(tr);
        const td = document.createElement('td');
        tr.append(td);
        td.append(nombre);
        td.append(numero);
    });          
}

$('agregar').on(click () => {
    GuardarContacto();
});  

function EditarContacto(_nombre, _numero) {
    let encontrado = false;
    let contacto = [];
    for(let i=0;i<agenda.length;i++){
      contacto = agenda[i];
      if(contacto[0] === _nombre){
        agenda[i][1] = _numero_nuevo;
        encontrado = true;
      }
    }
}

function EliminarContacto() {
    let fila = getElementById();
    fila.parentNode.removeChild();
}
