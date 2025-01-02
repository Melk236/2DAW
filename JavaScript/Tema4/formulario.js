function pierdeFocoNombre() {
  document.getElementById('errores').innerHTML = '';
  let nombre = document.getElementById('nombre').value;


  nombre = nombre.toUpperCase();

  document.getElementById('nombre').value = nombre;

  if (nombre.length > 64 || nombre.indexOf('0')>-1||nombre.indexOf('1')>-1||nombre.indexOf('2')>-1||nombre.indexOf('3')>-1||nombre.indexOf('4')>-1||nombre.indexOf('5')>-1||nombre.indexOf('6')>-1||nombre.indexOf('7')>-1||nombre.indexOf('8')>-1|| nombre.indexOf('9')>-1) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un nombre válido<br>';
    document.getElementById('nombre').focus();

  }


}

function pierdeFocoApellidos() {
  document.getElementById('errores').innerHTML = '';
  let apellidos = document.getElementById('apellidos').value;

  if (apellidos.length > 64 || apellidos.indexOf('0')>-1|| apellidos.indexOf('1')>-1|| apellidos.indexOf('2')>-1|| apellidos.indexOf('3')>-1|| apellidos.indexOf('4')>-1|| apellidos.indexOf('5')>-1|| apellidos.indexOf('6')>-1|| apellidos.indexOf('7')>-1|| apellidos.indexOf('8')>-1|| apellidos.indexOf('9')>-1) {
    document.getElementById('errores').innerHTML = 'Error, introduzca un apellido válido';
    document.getElementById('apellidos').focus();

  }
  
  document.getElementById('apellidos').value = apellidos.toUpperCase();

}
function pierdeFocoEdad(){
  document.getElementById('errores').innerHTML = '';
  let edad=document.getElementById('edad').value;
  edad=Number(edad);

  if(isNaN(edad) ||edad<0 || edad>105){
    document.getElementById('errores').innerHTML = 'Error, intrduzca una edad comprendida entre 0 y 105';
    document.getElementById('edad').focus();
  }
}

function compNif(){
  document.getElementById('errores').innerHTML='';
  let expresion=/^[0-9]{8,8}-[A-Z]$/;//^ Con este símbolo indicamos que va a empezar con numeros, [] los corchetes aseguran que puede empezar conn cualquier número, {} indica la longitud máxima de los números seguido de un guión litreal y corchetes para decir que tiene que aparecer cualquier letra de la A la Z y el dolar para indicar el final del patrón
  let nif=document.getElementById('nif').value;

  if(expresion.test(nif)==false){
    document.getElementById('errores').innerHTML='Error, introduzca un NIF válido';
    document.getElementById('nif').focus();
  }  
}

function comEmail(){
  document.getElementById('errores').innerHTML='';
  let expresion=/^([0-9]|[a-zA-Z])([0-9]|[a-zA-Z]|[.-_])+@[a-zA-Z]+\.[a-zA-Z]+$/;
  let email=document.getElementById('email').value;
  if(expresion.test(email)==false){
    document.getElementById('errores').innerHTML='Error, introduzca un email válido';
    document.getElementById('email').focus();
  }
}
