function matricula() {
    var n;

    do {
        n = prompt('Introduzca una matricula');
        if (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0) {
            alert('Error, introduzca un numero con cuatro cifras');
        }
    } while (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0);

    var numeros = n.split('', n);
    numeros = numeros.map(Number);
    numeros.sort();
    

    if (numeros[0] == numeros[1] && numeros[0] == numeros[2] && numeros[0]==numeros[3]) {
        document.write('La matricula: '+n+' es un poker');
    }
    else if(numeros[0] == numeros[1]-1 && numeros[1] == numeros[2]-1 && numeros[2]==numeros[3]-1){

        document.write('La matricula: '+n+' es una escalera completa');

    }
    else if((numeros[0] == numeros[1]-1 && numeros[1] == numeros[2]-1)||(numeros[1]==numeros[2]-1&&numeros[2]==numeros[3]-1) ){
        document.write('La matricula: '+n+' es una escalera simple');
    }
    else if((numeros[0] == numeros[1] && numeros[1] == numeros[2])||(numeros[1]==numeros[2]&&numeros[2]==numeros[3])){
        document.write('La matricula: '+n+' es un trio');
    }
    else if(numeros[0]==numeros[1]||numeros[2]==numeros[3]){
        document.write('La matricula: '+n+' es una doble pareja');
    }

}
matricula();