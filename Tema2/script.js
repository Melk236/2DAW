calcBits();//Llamada al método que calcula el movimiento de bits
function calcBits() {
    //Movimiento de bits
    let resultado;
    //El operador >> o << te permite mover los bits de un numero, >> para moverlos a la derecha y << a la izquierda 
    resultado = 125 >> 3;//Al dividir utillizamos el operador >> y es a 3 ya que 2 elevado 3 es 8.
    document.getElementById('oper1').innerHTML = '';
    document.getElementById('oper1').innerHTML = '125 / 8 = ' + resultado;

    resultado = 40 << 2;//Al multiplicar usamos el operador << y como 4 es igual a 2 elevado 2 movemos los bits 2 posiciones  a la izquierda.
    document.getElementById('oper2').innerHTML = '';
    document.getElementById('oper2').innerHTML = '40 x 4 = ' + resultado;

    resultado = 25 >> 1;//Lo mismo dividimos usamos >> para mover 1 posicion a a la derecha
    document.getElementById('oper3').innerHTML = '';
    document.getElementById('oper3').innerHTML = '25 / 2 = ' + resultado;

    resultado = 10 << 4;//Multiplicamos por 16 movemos 4 posiciones a la izquierda.
    document.getElementById('oper4').innerHTML = '';
    document.getElementById('oper4').innerHTML = '10 x 16 = ' + resultado;
}
function calc() {
    var select = document.getElementById('select');
    var opcion = select.options[select.selectedIndex]; // Obtener la opción seleccionada
    var id = opcion.id; // Obtener el id de la opción seleccionada

    let numero;

    // Comprobar el número según el id de la opción seleccionada
    if (id === 'op1') {
        let resultado;
        for (let i = 0; i <= 10; i++) {//Creamos un for que empieza desde cero para ir multiplicando el indice con el numero seleccionado por el usuario
            resultado = 7 * i;
            document.getElementById(i).innerHTML = '';//Se vacia la tabla
            document.getElementById('r' + i).innerHTML = '';

            document.getElementById(i).innerHTML = '7 x ' + i;//Y rellenamos con los td con los opereando y el resultado
            document.getElementById('r' + i).innerHTML = resultado;
        }

    }
    else if (id === 'op2') {
        let i = 0, resultado;
        while (i <= 10) {//Condición para que i empiece en 0 y termine en 10.
            /* Para el calculo de la tabla de la suma usamos un while para ello creamos 
            un indice para ir operando con el numero de la tabla*/
            document.getElementById(i).innerHTML = '';
            document.getElementById('r' + i).innerHTML = '';
            resultado = 8 + i;
            document.getElementById(i).innerHTML = '8 + ' + i;
            document.getElementById('r' + i).innerHTML = resultado;

            i++;//Incrementamos el índice i para que el bucle no sea infinito

        }

    } else {

        let i = 0, resultado;
        /*Exactamente igual para el do while se crea una variable local que será
        el índice*/ 
        do {
            document.getElementById(i).innerHTML = '';
            document.getElementById('r' + i).innerHTML = '';

            resultado = 9 / i;
            resultado = resultado.toFixed(2);
            document.getElementById(i).innerHTML = '9 / ' + i;
            document.getElementById('r' + i).innerHTML = resultado;

            i++;//Incrementamos i para que el bucle no sea infinito
        } while (i <= 10);//Condición de ruptura del bucle para que calcule los 10 primeros números de la tabla
    }
}
