var n,doblePareja = 0, trio = 0, escaleraSimple = 0, escaleraCompleta = 0, pocker = 0;

    total();
function matricula() {

   
    n = document.getElementById('mat').value;
    if (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0) {
        alert('ERROR,introduzca un numero de 4 cifras');
        return;

    }

    else {
        let contador = 0;
        let cookies = document.cookie.split('; '); // Dividir todas las cookies en un arreglo
        
        for(let i=0;i<cookies.length;i++){
            let partes=cookies[i].split('=');
                if(partes[0]=='contador'){
                    contador=parseInt(partes[1]);
                }
        }
        contador++;

        document.cookie='contador='+contador;
        
        
    }


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
    else {
        document.getElementById('inf').innerHTML = 'No es ninguna combinación';
    }
    alert(document.cookie);

}
function total(){




    for (let i = 0; i < 10000; i++) {
        if (i < 10) {
            if (i == 0) {
                pocker++;
            }
            else {
                trio++;
            }
        }
        else if (i < 100) {
            n = i.toString();
            n = '00' + i;
            n = n.split('');
            n = n.map(Number);
            n.sort();
            if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++;
                
            }
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++;
            }
            else if (n[0] == n[1] && n[2] == n[3]) {

                doblePareja++;

            }

        }
        else if (i < 1000) {
            n = i.toString();
            n = '0' + i;
            n = n.split('');
            n = n.map(Number);
            n.sort();

            if (n[0] == n[1] - 1 && n[1] == n[2] - 1 && n[2] == n[3] - 1) {

                escaleraCompleta++;

            }
            else if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++;
                
            }
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++;
            }
            else if (n[0] == n[1] && n[2] == n[3]) {

                doblePareja++;

            }

        }
        else {
            n = i.toString();
            n = n.split('');
            n = n.map(Number);
            n.sort();
            if (n[0] == n[1] && n[0] == n[2] && n[0] == n[3]) {
                pocker++;
            }
            else if (n[0] == n[1] - 1 && n[1] == n[2] - 1 && n[2] == n[3] - 1) {

                escaleraCompleta++;

            }
            else if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++;
                
            }
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++;
            }
            else if (n[0] == n[1] && n[2] == n[3]) {

                doblePareja++;

            }

        }

    }
    document.getElementById('pocker').innerHTML='Pocker: '+pocker;
    document.getElementById('complet').innerHTML='Escalera completa: '+escaleraCompleta;
    document.getElementById('simple').innerHTML='Escalera simple: '+escaleraSimple;
    document.getElementById('trio').innerHTML='Trio: '+trio;
    document.getElementById('doble').innerHTML='Doble: '+doblePareja;
    doblePareja=0;
    escaleraSimple=0;
    pocker=0;
    escaleraSimple=0;
    trio=0;
    escaleraCompleta=0;

}