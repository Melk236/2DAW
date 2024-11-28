// Variables para llevar el conteo de las combinaciones encontradas
var n, doblePareja = 0, trio = 0, escaleraSimple = 0, escaleraCompleta = 0, pocker = 0;

// Llama a la función total() al inicio para hacer el conteo de combinaciones posibles
total();

// Función que maneja la matrícula introducida por el usuario
function matricula() {
   
    // Obtiene el valor introducido en el campo de matrícula (input con id 'mat')
    n = document.getElementById('mat').value;

    // Verifica que la matrícula tenga exactamente 4 dígitos y que no contenga caracteres no numéricos ni espacios
    if (n.length != 4 || isNaN(n) || n.indexOf(' ') >= 0) {
        // Si no es válido, muestra un mensaje de error
        alert('ERROR, introduzca un número de 4 cifras');
        return;
    }
    else {
        // Si la matrícula es válida, actualiza el contador de cookies
        let contador = 0;
        let cookies = document.cookie.split('; '); // Dividir todas las cookies en un arreglo
        
        // Recorre las cookies para buscar el contador
        for(let i = 0; i < cookies.length; i++) {
            let partes = cookies[i].split('=');
            // Si se encuentra el contador, lo actualiza
            if(partes[0] == 'contador') {
                contador = parseInt(partes[1]);
            }
        }
        // Incrementa el contador
        contador++;

        // Actualiza el valor del contador en las cookies
        document.cookie = 'contador=' + contador;
    }

    // Convierte el número de matrícula en un arreglo de dígitos
    var numeros = n.split('', numeros);
    // Convierte cada dígito en número y los ordena
    numeros = numeros.map(Number);
    numeros.sort();

    // Clasifica la matrícula según la combinación de números
    if (numeros[0] == numeros[1] && numeros[0] == numeros[2] && numeros[0] == numeros[3]) {
        // Si todos los dígitos son iguales (poker)
        document.getElementById('inf').innerHTML = 'La matrícula: ' + n + ' es un poker';
    }
    else if (numeros[0] == numeros[1] - 1 && numeros[1] == numeros[2] - 1 && numeros[2] == numeros[3] - 1) {
        // Si los dígitos son una secuencia consecutiva (escalera completa)
        document.getElementById('inf').innerHTML = 'La matrícula: ' + n + ' es una escalera completa';
    }
    else if ((numeros[0] == numeros[1] - 1 && numeros[1] == numeros[2] - 1) || (numeros[1] == numeros[2] - 1 && numeros[2] == numeros[3] - 1) || (numeros[0] == numeros[1] - 1 && numeros[1] == numeros[3] - 1)) {
        // Si hay 3 números consecutivos (escalera simple)
        document.getElementById('inf').innerHTML = 'La matrícula: ' + n + ' es una escalera simple';
    }
    else if ((numeros[0] == numeros[1] && numeros[1] == numeros[2]) || (numeros[1] == numeros[2] && numeros[2] == numeros[3])) {
        // Si hay 3 números iguales (trio)
        document.getElementById('inf').innerHTML = 'La matrícula: ' + n + ' es un trio';
    }
    else if (numeros[0] == numeros[1] && numeros[2] == numeros[3]) {
        // Si hay dos pares de números iguales (doble pareja)
        document.getElementById('inf').innerHTML = 'La matrícula: ' + n + ' es una doble pareja';
    }
    else {
        // Si no es ninguna combinación especial
        document.getElementById('inf').innerHTML = 'No es ninguna combinación';
    }

    // Muestra el valor del contador en las cookies
    alert(document.cookie);
}

// Función que cuenta todas las combinaciones posibles entre números de 4 dígitos
function total() {
    // Itera desde 0 hasta 9999 (todas las combinaciones de 4 dígitos)
    for (let i = 0; i < 10000; i++) {
        // Si el número es menor a 10, lo clasifica como un 'trio' o 'poker' (por ejemplo, 0001 o 0000)
        if (i < 10) {
            if (i == 0) {
                pocker++; // Poker: todos los dígitos iguales
            }
            else {
                trio++; // Trio: tres dígitos iguales
            }
        }
        // Si el número tiene 2 dígitos, lo formatea con 2 ceros delante y lo clasifica
        else if (i < 100) {
            n = i.toString();
            n = '00' + i;
            n = n.split('');
            n = n.map(Number);
            n.sort();
            // Comprobación de escalera simple, trio y doble pareja
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
        // Si el número tiene 3 dígitos, lo formatea con 1 cero delante y lo clasifica
        else if (i < 1000) {
            n = i.toString();
            n = '0' + i;
            n = n.split('');
            n = n.map(Number);
            n.sort();
            // Comprobación de escalera completa, escalera simple, trio y doble pareja
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
            // Si el número tiene 4 dígitos, lo clasifica según las combinaciones posibles
            n = i.toString();
            n = n.split('');
            n = n.map(Number);
            n.sort();
            // Comprobación de poker, escalera completa, escalera simple, trio y doble pareja
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

    // Muestra el resultado del conteo de combinaciones
    document.getElementById('pocker').innerHTML = 'Pocker: ' + pocker;
    document.getElementById('complet').innerHTML = 'Escalera completa: ' + escaleraCompleta;
    document.getElementById('simple').innerHTML = 'Escalera simple: ' + escaleraSimple;
    document.getElementById('trio').innerHTML = 'Trio: ' + trio;
    document.getElementById('doble').innerHTML = 'Doble: ' + doblePareja;

    // Reinicia los contadores para la próxima ejecución
    doblePareja = 0;
    escaleraSimple = 0;
    pocker = 0;
    escaleraCompleta = 0;
    trio = 0;
}
