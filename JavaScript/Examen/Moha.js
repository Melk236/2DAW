let v1, v2, v3, v4;
var fecha = new Date();
var usuario = {
    us: 'alumno',
    contraseña: 'bueno'

};
const array = [];//Variable globales para poder operer con el array y la fecha
function ventana1() {
    v1 = window.open("", "ventana", "width=300,height=300");
    //En este método se abre la ventana y se comprueba la contraseña del objeto y el input introducido
    var validar;
    var input = document.getElementById('cont').value;
    if (usuario.contraseña !== input) {
        validar = 'Usario incorrecto';
        return;
    }

    else {
        validar = 'Usario correcto';
    }
    usuario.contraseña = document.getElementById('nue').value;
    v1.document.body.innerHTML = validar + '<br>';
    v1.document.body.innerHTML += '<label> Nueva Contraseña</label>';
    v1.document.body.innerHTML += '<input type="text"></input>';




}



function ventana2() {
    //En la ventana 2 se crea el array con eltamaño de 6 a 9 con el random
    v2 = window.open("", "", "width=300,height=300,left=0,top=1000");

    var n = document.getElementById('select').value;//Los valores que va acontener el array
    var v = Math.floor(Math.random() * 9);

    var mayor;
    var menor;
    if (v < 6) {
        v = 6;
    }


    for (let i = 0; i < v; i++) {
        array[i] = Math.floor(Math.random() * n);

    }
    mayor = array[0];

    menor = array[0];
    //Con este bucle para saber cual es el menor y cual es el mayor
    for (let i = 0; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i];

        }
        if (menor > array[i]) {
            menor = array[i];

        }

    }
    var array2 = [];
    //Rellenamos el array con el valor mas pequeño al mas grande
    for (let i = menor; i <= mayor; i++) {
        array2[i] = i;

    }

    v2.document.body.innerHTML = 'El array: ' + array.toString() + '<br>';
    v2.document.body.innerHTML += 'Desde el menor al mayor: ' + array2.toString();
    //Se muestra en la ventana
}
function ventana3() {
    v3 = window.open("", "", "width=300,height=300,left=2000,top=0");
    var array2 = [];
    var j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {//Condicion para saber si el numero es par o impar
            array2[j] = array[i];
            j++;
        }
    }

    v3.document.body.innerHTML = 'Los numeros impares son: ' + array2.toString();
}
function ventana4() {
    //En este método se muestra la contraseña  actual del usario y la fecha de la ultima modificaicon
    v4 = window.open("", "", "width=300,height=300,left=2000,top=1000");
    v4.document.body.innerHTML = 'La contraseña del usuario es: ' + usuario.contraseña;
    v4.document.body.innerHTML += 'La ultima vez cambiada la fecha es: ' + fecha;
}
function cerrar1() {
    v1.close();
}
function cerrar2() {
    v2.close();
}
function cerrar3() {
    v3.close();
}
function cerrar4() {
    v4.close();
}
