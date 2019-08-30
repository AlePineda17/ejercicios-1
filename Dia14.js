var equipo = {
    ventas: [100, 300, 250, 400],
    mercadeo: {
        norte: [150, 500, 325, 450, 250],
        sur: [100, 200, 550, 100, 250, 350],
    }
}

var sum = 0;

function Sumar(equipo){
        for (subobjeto in equipo){
            if (typeof equipo[subobjeto] == 'numero'){
            sum += equipo[subobjeto];
            }    
            else if (typeof equipo[subobjeto] == 'objeto'){
                sum += equipo[subobjeto]; 
            }
        }
        return sum;
 }            

Sumar(equipo);

/*function Sumar(Recorrer){
    for (var i=100; i<=550; i++){
        var sum = 0;
        sum += i;
    }
    return sum;
}

function Sumar(equipo){
    for (var i=100; i<=550; i++){
        for (departamento in equipo){
            for (area in equipo[departamento]){
                var sum = 0;
                sum += Sumar[i];
            }
        }
    }
    return sum;
}                

Sumar(equipo);
function Recorrer(){
    for (departamento in equipo){
        if (ventas in equipo)
        for (var i=100; i<=550; i++){
            var sum = 0;
            sum += i;
        }  
        else {
        for (area in equipo[departamento]){
            for (var i=100; i<=550; i++){
                var sum = 0;
                sum += i;
            }    
        }
       }
    }    
    return sum;
}


/*for (departamento in equipo){
    for (area in equipo[departamento])
    var sum1 = equipo[ventas][0] + equipo[ventas][1] + equipo[ventas][2] + equipo[ventas][3];  
    var sum2 = equipo[mercadeo][sur][0] + equipo[mercadeo][sur][1] + equipo[mercadeo][sur][2] + equipo[mercadeo][sur][3] + equipo[mercadeo][sur][4] + equipo[mercadeo][sur][5]; 
    var sum3 = equipo[mercadeo][norte][0] + equipo[mercadeo][norte][1] + equipo[mercadeo][norte][2] + equipo[mercadeo][norte][3] + equipo[mercadeo][norte][4];
    var suma_total = sum1 + sum2 + sum3;
}*/