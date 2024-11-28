// Inicialización de variables
var n, doblePareja = 0, trio = 0, escaleraSimple = 0, escaleraCompleta = 0, pocker = 0;

// Función principal que calcula las probabilidades
function probabilidad() {

    // Bucle para generar números de 0 a 9999 (10,000 iteraciones)
    for (let i = 0; i < 10000; i++) {

        // Si el número es menor que 10
        if (i < 10) {
            // Si el número es 0, cuenta como "poker"
            if (i == 0) {
                pocker++;
            }
            // Si el número es otro distinto de 0, cuenta como "trio"
            else {
                trio++;
            }
        }
        // Si el número es menor que 100 (pero mayor o igual a 10)
        else if (i < 100) {
            n = i.toString(); // Convierte el número a string
            n = '00' + i; // Asegura que el número tenga tres dígitos (p. ej., 7 se convierte en "007")
            n = n.split(''); // Divide el número en sus dígitos individuales
            n = n.map(Number); // Convierte los dígitos de string a números
            n.sort(); // Ordena los dígitos de menor a mayor
            
            // Verifica si es una "escalera simple" (secuencia consecutiva de 3 dígitos)
            if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++; // Incrementa el contador de escaleras simples
                
            }
            // Verifica si es un "trio" (tres números iguales)
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++; // Incrementa el contador de trios
            }
            // Verifica si es una "doble pareja" (dos números iguales seguidos de otros dos iguales)
            else if (n[0] == n[1] && n[2] == n[3]) {
                doblePareja++; // Incrementa el contador de dobles parejas
            }

        }
        // Si el número es menor que 1000 (pero mayor o igual a 100)
        else if (i < 1000) {
            n = i.toString();
            n = '0' + i; // Asegura que el número tenga 3 dígitos
            n = n.split('');
            n = n.map(Number);
            n.sort();

            // Verifica si es una "escalera completa" (4 dígitos consecutivos)
            if (n[0] == n[1] - 1 && n[1] == n[2] - 1 && n[2] == n[3] - 1) {
                escaleraCompleta++; // Incrementa el contador de escaleras completas
            }
            // Verifica si es una "escalera simple" (secuencia consecutiva de 3 dígitos)
            else if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++; // Incrementa el contador de escaleras simples
                
            }
            // Verifica si es un "trio" (tres números iguales)
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++; // Incrementa el contador de trios
            }
            // Verifica si es una "doble pareja" (dos números iguales seguidos de otros dos iguales)
            else if (n[0] == n[1] && n[2] == n[3]) {
                doblePareja++; // Incrementa el contador de dobles parejas
            }

        }
        // Si el número es mayor o igual a 1000
        else {
            n = i.toString();
            n = n.split('');
            n = n.map(Number);
            n.sort();

            // Verifica si es un "poker" (cuatro números iguales)
            if (n[0] == n[1] && n[0] == n[2] && n[0] == n[3]) {
                pocker++; // Incrementa el contador de pokers
            }
            // Verifica si es una "escalera completa" (4 dígitos consecutivos)
            else if (n[0] == n[1] - 1 && n[1] == n[2] - 1 && n[2] == n[3] - 1) {
                escaleraCompleta++; // Incrementa el contador de escaleras completas
            }
            // Verifica si es una "escalera simple" (secuencia consecutiva de 3 dígitos)
            else if ((n[0] == n[1] - 1 && n[1] == n[2] - 1) || (n[1] == n[2] - 1 && n[2] == n[3] - 1) || (n[0] == n[1] - 1 && n[1] == n[3] - 1)||(n[1]==n[2]-1&&n[2]==n[3]-1)) {
                escaleraSimple++; // Incrementa el contador de escaleras simples
                
            }
            // Verifica si es un "trio" (tres números iguales)
            else if ((n[0] == n[1] && n[1] == n[2]) || (n[1] == n[2] && n[2] == n[3])) {
                trio++; // Incrementa el contador de trios
            }
            // Verifica si es una "doble pareja" (dos números iguales seguidos de otros dos iguales)
            else if (n[0] == n[1] && n[2] == n[3]) {
                doblePareja++; // Incrementa el contador de dobles parejas
            }
        }
    }

    // Muestra las probabilidades de cada combinación calculada
    document.write('Pocker: ' + (pocker * 100) / 10000 + '%<br>');
    document.write('Escalera Completa: ' + (escaleraCompleta * 100) / 10000 + '%<br>');
    document.write('Escalera Simple: ' + (escaleraSimple * 100) / 10000 + '%<br>');
    document.write('Trio: ' + (trio * 100) / 10000 + '%<br>');
    document.write('Doble Pareja: ' + (doblePareja * 100) / 10000 + '%<br>');

    // Cierra la ventana después de 10 segundos
    setTimeout(() => {
        window.close()
    }, 10000);
}

// Llama a la función para ejecutar el cálculo
probabilidad();
