
window.onload = () => {
  // Cargar dinámicamente las opciones de provincia en el elemento select
  let provincia = document.getElementById('provincia');
  provincia.innerHTML += '<option>Granada</option>';
  provincia.innerHTML += '<option>Huelva</option>';
  provincia.innerHTML += '<option>Sevilla</option>';
  provincia.innerHTML += '<option>Cádiz</option>';
  provincia.innerHTML += '<option>Córdoba</option>';
  provincia.innerHTML += '<option>Jaén</option>';
  provincia.innerHTML += '<option>Málaga</option>';

  // Validación del campo "nombre"
  document.getElementById('nombre').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let nombre = document.getElementById('nombre').value;

    // Convierte el nombre a mayúsculas
    nombre = nombre.toUpperCase();
    document.getElementById('nombre').value = nombre;

    // Comprueba longitud y que no contenga números
    if (
      nombre.length > 64 ||
      nombre.indexOf('0') > -1 ||
      nombre.indexOf('1') > -1 ||
      nombre.indexOf('2') > -1 ||
      nombre.indexOf('3') > -1 ||
      nombre.indexOf('4') > -1 ||
      nombre.indexOf('5') > -1 ||
      nombre.indexOf('6') > -1 ||
      nombre.indexOf('7') > -1 ||
      nombre.indexOf('8') > -1 ||
      nombre.indexOf('9') > -1
    ) {
      document.getElementById('errores').innerHTML = 'Error, introduzca un nombre válido<br>';
      document.getElementById('nombre').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "apellidos"
  document.getElementById('apellidos').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let apellidos = document.getElementById('apellidos').value;

    // Comprueba longitud y que no contenga números
    if (
      apellidos.length > 64 ||
      apellidos.indexOf('0') > -1 ||
      apellidos.indexOf('1') > -1 ||
      apellidos.indexOf('2') > -1 ||
      apellidos.indexOf('3') > -1 ||
      apellidos.indexOf('4') > -1 ||
      apellidos.indexOf('5') > -1 ||
      apellidos.indexOf('6') > -1 ||
      apellidos.indexOf('7') > -1 ||
      apellidos.indexOf('8') > -1 ||
      apellidos.indexOf('9') > -1
    ) {
      document.getElementById('errores').innerHTML = 'Error, introduzca un apellido válido';
      document.getElementById('apellidos').focus(); // Devuelve el foco al campo
    }

    // Convierte los apellidos a mayúsculas
    document.getElementById('apellidos').value = apellidos.toUpperCase();
  });

  // Validación del campo "edad"
  document.getElementById('edad').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let edad = document.getElementById('edad').value;
    edad = Number(edad); // Convierte la edad a número

    // Comprueba que la edad sea un número válido entre 0 y 105
    if (isNaN(edad) || edad < 0 || edad > 105) {
      document.getElementById('errores').innerHTML =
        'Error, introduzca una edad comprendida entre 0 y 105';
      document.getElementById('edad').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "nif"
  document.getElementById('nif').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let expresion = /^[0-9]{8,8}-[A-Z]$/; // Valida formato NIF: 8 dígitos seguidos de un guion y una letra
    let nif = document.getElementById('nif').value;

    // Comprueba que el NIF sea válido
    if (expresion.test(nif) == false && nif != '') {
      document.getElementById('errores').innerHTML = 'Error, introduzca un NIF válido';
      document.getElementById('nif').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "email"
  document.getElementById('email').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let expresion = /^([0-9]|[a-zA-Z])([0-9]|[a-zA-Z]|[.-_])+@[a-zA-Z]+\.[a-zA-Z]+$/; // Valida formato de email
    let email = document.getElementById('email').value;

    // Comprueba que el email sea válido
    if (expresion.test(email) == false && email != '') {
      document.getElementById('errores').innerHTML = 'Error, introduzca un email válido';
      document.getElementById('email').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "provincia"
  document.getElementById('provincia').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let provincia = document.getElementById('provincia').value;

    // Comprueba que se seleccione una provincia
    if (provincia == '0') {
      document.getElementById('errores').innerHTML = 'Error, seleccione alguna provincia';
      document.getElementById('provincia').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "fecha"
  document.getElementById('fecha').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let patron = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])(\/|-)[0-9]{4,4}$/; // Valida fechas en formato DD/MM/YYYY o DD-MM-YYYY
    let fecha = document.getElementById('fecha').value;

    // Comprueba que la fecha sea válida
    if (patron.test(fecha) == false && fecha != '') {
      document.getElementById('errores').innerHTML = 'Error, introduzca una fecha válida';
      document.getElementById('fecha').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "teléfono"
  document.getElementById('telefono').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let patron = /^[0-9]{9,9}$/; // Valida un número de teléfono con 9 dígitos
    let numero = document.getElementById('telefono').value;

    // Comprueba que el número sea válido
    if (patron.test(numero) == false && numero != '') {
      document.getElementById('errores').innerHTML =
        'Error, introduzca un número de teléfono válido';
      document.getElementById('telefono').focus(); // Devuelve el foco al campo
    }
  });

  // Validación del campo "hora"
  document.getElementById('hora').addEventListener('blur', () => {
    document.getElementById('errores').innerHTML = ''; // Limpia mensajes de error previos
    let patron = /^(0[0-9]|1[0-9]|2[0-3]):(0|1|2|3|4|5)[0-9]$/; // Valida formato de hora (HH:mm)
    let hora = document.getElementById('hora').value;

    // Comprueba que la hora sea válida
    if (patron.test(hora) == false && hora != '') {
      document.getElementById('errores').innerHTML = 'Error, introduzca una hora válida';
      document.getElementById('hora').focus(); // Devuelve el foco al campo
    }
  });

  // Confirmación al enviar datos
  document.getElementById('enviar').addEventListener('onclick', () => {
    confirm('¿Quiere enviar los datos proporcionados?');
  });
};



  
