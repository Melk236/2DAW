let boton = document.getElementById('boton');
let tabla;


function enviar() {
   let nombre=document.getElementById('nombre').value;
    if (document.getElementById('nombre').value == 'usuario' || document.getElementById('nombre').value == 'administrador') {
        
        alert(nombre);
        localStorage.setItem('nombre',nombre);
        window.location.href = 'formulario.html';
      
     
    }
    else {
        document.getElementById('error').innerHTML = 'Usuario incorrecto';
    }

}



function almacenar() {
    let nombre=localStorage.getItem('nombre');
    alert(nombre);
    if(nombre=='usuario'){
    let contenedor = document.getElementById('tabla');
    tabla = document.createElement('table');
    contenedor.appendChild(tabla);
    tabla.style.border = 'solid 1px';
    let fila = document.createElement('tr');
    tabla.appendChild(fila);
    agregarCelda(fila, 'Nombre');
    agregarCelda(fila, 'Descripción');
    agregarCelda(fila, 'Importancia');
    agregarCelda(fila, 'Duración estimada');
    }



}

function agregarCelda(fila, contenido) {

    let columna = document.createElement('td');
    columna.style.border = 'solid 1px';
    contenido = document.createTextNode(contenido);
    columna.appendChild(contenido);
    fila.appendChild(columna);

}






