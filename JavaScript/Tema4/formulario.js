function pierdeFocoNombre() {
  document.getElementById('errores').innerHTML = '';
  let nombre = document.getElementById('nombre').value;


  nombre = nombre.toUpperCase();

  document.getElementById('nombre').value = nombre;

  if (nombre.length > 64 || nombre.indexOf('0') > -1 || nombre.indexOf('1') > -1 || nombre.indexOf('2') > -1 || nombre.indexOf('3') > -1 || nombre.indexOf('4') > -1 || nombre.indexOf('5') > -1 || nombre.indexOf('6') > -1 || nombre.indexOf('7') > -1 || nombre.indexOf('8') > -1 || nombre.indexOf('9') > -1) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un nombre válido<br>';
    document.getElementById('nombre').focus();

  }


}

function pierdeFocoApellidos() {
  document.getElementById('errores').innerHTML = '';
  let apellidos = document.getElementById('apellidos').value;

  if (apellidos.length > 64 || apellidos.indexOf('0') > -1 || apellidos.indexOf('1') > -1 || apellidos.indexOf('2') > -1 || apellidos.indexOf('3') > -1 || apellidos.indexOf('4') > -1 || apellidos.indexOf('5') > -1 || apellidos.indexOf('6') > -1 || apellidos.indexOf('7') > -1 || apellidos.indexOf('8') > -1 || apellidos.indexOf('9') > -1) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un apellido válido';
    document.getElementById('apellidos').focus();

  }

  document.getElementById('apellidos').value = apellidos.toUpperCase();

}
function pierdeFocoEdad() {
  document.getElementById('errores').innerHTML = '';
  let edad = document.getElementById('edad').value;
  edad = Number(edad);

  if (isNaN(edad) || edad < 0 || edad > 105) {
    document.getElementById('errores').innerHTML = 'Error, intrduzca una edad comprendida entre 0 y 105';
    document.getElementById('edad').focus();
  }
}

function compNif() {
  document.getElementById('errores').innerHTML = '';
  let expresion = /^[0-9]{8,8}-[A-Z]$/;//^ Con este símbolo indicamos que va a empezar con numeros, [] los corchetes aseguran que puede empezar conn cualquier número, {} indica la longitud máxima de los números seguido de un guión litreal y corchetes para decir que tiene que aparecer cualquier letra de la A la Z y el dolar para indicar el final del patrón
  let nif = document.getElementById('nif').value;

  if (expresion.test(nif) == false) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un NIF válido';
    document.getElementById('nif').focus();
  }
}

function comEmail() {
  document.getElementById('errores').innerHTML = '';
  let expresion = /^([0-9]|[a-zA-Z])([0-9]|[a-zA-Z]|[.-_])+@[a-zA-Z]+\.[a-zA-Z]+$/;/*El siguiente patron indica que la expresión
  puede comenzar con un numero o letra, además puede contener .,- y _ despues contendrá el dominio con símbolo más que indica que 
  puede aparecer una vez o muchas veces seguido del punto y el dominio al final*/
  let email = document.getElementById('email').value;
  if (expresion.test(email) == false) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un email válido';
    document.getElementById('email').focus();
  }
}
function comProvincia() {
  document.getElementById('errores').innerHTML = '';
  let provincia = document.getElementById('provincia').value;
  if (provincia == '0') {
    document.getElementById('errores').innerHTML = 'Error, seleccione alguna provincia';
    document.getElementById('provincia').focus();
  }
}

function comFecha() {
  document.getElementById('errores').innerHTML = '';
  let patron = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)[0-9]{4,4}$/; //Para validar fechas (0[1-9]|1[0-9]|2[0-9]|3[0-1]) para días 01-31, (\/|-) para separadores '/', '-', (0[1-9]|1[0-2]) para meses 01-12, y [0-9]{4,4} para años de 4 dígitos.
  let fecha = document.getElementById('fecha').value;

  if (patron.test(fecha) == false) {
    document.getElementById('errores').innerHTML = 'Error, introduzca una fecha válida';
    document.getElementById('fecha').focus();
  }

}
function comTelefono() {
  document.getElementById('errores').innerHTML = '';
  let patron = /^[0-9]{9,9}$/ //Indicamos que el patron debe comenzar con un numero y debe de contener una longitud mínima de 9 y máxima de 9.

  let numero = document.getElementById('telefono').value;

  if (patron.test(numero) == false) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un número de teléfono válido';
    document.getElementById('telefono').focus();
  }

}

function comHora() {
  document.getElementById('errores').innerHTML = '';
  let patron = /^(0[0-9]|1[0-9]|2[0-3]):(0|1|2|3|4|5)[0-9]$/;/*Este patron verifica que la hora empieze con un numero válido que son las horas(0-23) despues los dos puntos y ya los minutos(0-59) */
  let hora = document.getElementById('hora').value;
  if (patron.test(hora) == false) {
    document.getElementById('errores').innerHTML = 'Error, introduzca una hora válido';
    document.getElementById('hora').focus();
  }
}
function envio() {
  confirm('¿Quiere enviar los datos proporcionados?');
  
}