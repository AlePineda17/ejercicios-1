const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];  
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function crearMes(){
    const tbody = $('tbody');
    for (let i = 0; i <= 5; i++){
        const tr = document.createElement('tr');
        for (let j = 0; j < 7; j++){
            const td = document.createElement('td');
            numeros.forEach(numero => {
                const text = document.createTextNode(`${numero}`);
                td.append(text);
            });   
            if(td = 7){
                const br = document.createElement('br');
                tr.append(br);  
            }     
            tr.append(td);
        }
        tbody.append(tr);      
    }
}

crearMes(12);

/*numeros.forEach(numero => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const text = document.createTextNode(`${numero}`);
    if {

    }

    td.append(text);
});*/  