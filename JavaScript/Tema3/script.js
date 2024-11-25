function matricula() {
    var n,doblePareja=0,trio=0,rscaleraSimple=0,escaleraCompleta=0,pocker=0;

    do {
        n = prompt('Introduzca una matricula');
        if (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0) {
            alert('Error, introduzca un numero con cuatro cifras');
        }
    } while (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0);

    var numeros = n.split('', n);
    numeros = numeros.map(Number);
    numeros.sort();


    if (numeros[0] == numeros[1] && numeros[0] == numeros[2] && numeros[0] == numeros[3]) {
        document.write('La matricula: ' + n + ' es un poker');
    }
    else if (numeros[0] == numeros[1] - 1 && numeros[1] == numeros[2] - 1 && numeros[2] == numeros[3] - 1) {

        document.write('La matricula: ' + n + ' es una escalera completa');

    }
    else if ((numeros[0] == numeros[1] - 1 && numeros[1] == numeros[2] - 1) || (numeros[1] == numeros[2] - 1 && numeros[2] == numeros[3] - 1)) {
        document.write('La matricula: ' + n + ' es una escalera simple');
    }
    else if ((numeros[0] == numeros[1] && numeros[1] == numeros[2]) || (numeros[1] == numeros[2] && numeros[2] == numeros[3])) {
        document.write('La matricula: ' + n + ' es un trio');
    }
    else if (numeros[0] == numeros[1] && numeros[2] == numeros[3]) {

        document.write('La matricula: ' + n + ' es una doble pareja');

    }
   
    
    

}

function probabilidad(){

    for(let i=0;i<10000;i++){
        if(i<10){
            if(i=0){
                pocker++;
            }
            else{
                trio++;
            }
        }
        else if(i<100){
            n=i.toString();
            


            

        }

    }

}
matricula();