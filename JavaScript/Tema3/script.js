var n;

function matricula() {
    
    do {
        n = document.getElementById('mat').value;
        if (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0) {
            alert('ERROR,introduzca un numero de 4 cifras');
            return;
            
        }
    } while (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0);

    var numeros = n.split('', numeros);
    numeros = numeros.map(Number);
    numeros.sort();


    if (numeros[0] == numeros[1] && numeros[0] == numeros[2] && numeros[0] == numeros[3]) {
        document.getElementById('inf').innerHTML = 'La matricula: ' + n + ' es un poker';
    }
    else if (numeros[0] == numeros[1] - 1 && numeros[1] == numeros[2] - 1 && numeros[2] == numeros[3] - 1) {

        document.getElementById('inf').innerHTML = 'La matricula: ' + n + ' es una escalera completa';

    }
    else if ((numeros[0] == numeros[1] - 1 && numeros[1] == numeros[2] - 1) || (numeros[1] == numeros[2] - 1 && numeros[2] == numeros[3] - 1) || (numeros[0] == numeros[1] - 1 && numeros[1] == numeros[3] - 1)) {
        document.getElementById('inf').innerHTML = 'La matricula: ' + n + ' es una escalera simple';
    }
    else if ((numeros[0] == numeros[1] && numeros[1] == numeros[2]) || (numeros[1] == numeros[2] && numeros[2] == numeros[3])) {
        document.getElementById('inf').innerHTML = 'La matricula: ' + n + ' es un trio';
    }
    else if (numeros[0] == numeros[1] && numeros[2] == numeros[3]) {

        document.getElementById('inf').innerHTML = 'La matricula: ' + n + ' es una doble pareja';

    }
    else{
        document.getElementById('inf').innerHTML = 'No es ninguna combinación';
    }

}


