let usuario = document.getElementById('usuario');
let p = document.createElement('p');
let contenido = document.createTextNode('Error, usuario o contraseña incorrectos');
let tabla, fila, celda, valid = false;
let boton = document.createElement('button');
boton.setAttribute('type', 'button');
boton.setAttribute('onclick', 'borrar()');
function validar() {

    if (usuario.value == 'empleado' || usuario.value == 'administrador') {
        localStorage.setItem('usuario', usuario.value);
        window.location.href = 'form2.html';

    }
    else {
        p.appendChild(contenido);
        document.body.appendChild(p);
    }

}
tabla = document.createElement('table');
tabla.style.border = '1px solid';
function almacenar() {
    usuario = localStorage.getItem('usuario');
    document.body.appendChild(tabla);
    let form = document.getElementById('form');
    if (usuario == 'empleado') {
        if (valid == false) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Tarea');
            celda.appendChild(contenido);
            fila.appendChild(celda);


            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Descripción');
            celda.appendChild(contenido);
            fila.appendChild(celda);


            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Importancia');
            celda.appendChild(contenido);
            fila.appendChild(celda);


            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Duración');
            celda.appendChild(contenido);
            fila.appendChild(celda);

            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type != 'button') {
                    contenido = document.createTextNode(form.elements[i].value)
                    agregarCelda(celda, contenido);
                }
            }
            valid = true;
        }
        else {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type != 'button') {
                    contenido = document.createTextNode(form.elements[i].value)
                    agregarCelda(celda, contenido);
                }
            }

        }


    }

    else {
        if (valid == false) {
            contenido = document.createTextNode('Borrar');
            boton.appendChild(contenido);

            form.appendChild(boton);
            fila = document.createElement('tr');
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Tarea');
            celda.appendChild(contenido);
            fila.appendChild(celda);


            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Descripción');
            celda.appendChild(contenido);
            fila.appendChild(celda);


            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Importancia');
            celda.appendChild(contenido);
            fila.appendChild(celda);


            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Duración');
            celda.appendChild(contenido);
            fila.appendChild(celda);

            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Realizado');
            celda.appendChild(contenido);
            fila.appendChild(celda);

            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Borrar');
            celda.appendChild(contenido);
            fila.appendChild(celda);

            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type != 'button') {
                    contenido = document.createTextNode(form.elements[i].value)
                    agregarCelda(celda, contenido);
                }
            }
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');

            agregar(celda, contenido);
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            contenido.setAttribute('class', 'borrar');
            agregar(celda, contenido);
            valid = true;
        }
        else {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type != 'button') {
                    contenido = document.createTextNode(form.elements[i].value)
                    agregarCelda(celda, contenido);
                }
            }
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');

            agregar(celda, contenido);
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            contenido.setAttribute('class', 'borrar');
            agregar(celda, contenido);
        }
    }

}

function agregarCelda(celda, contenido) {
    celda = document.createElement('td');
    celda.style.border = '1px solid';
    celda.appendChild(contenido);
    fila.appendChild(celda);
}

function agregar(celda, contenido) {
    celda = document.createElement('td');
    celda.style.border = '1px solid';

    celda.appendChild(contenido);
    fila.appendChild(celda);
}

function borrar() {
    let bor = document.getElementsByClassName('borrar');
    let padre;
    for (let i = 0; i < bor.length; i++) {
        if(bor[i].checked){
            padre=bor[i].parentNode;
            padre=padre.parentNode;
            padre.parentNode.removeChild(padre);
            i--;
        }
        
    }
    if(bor.length<=0){
        tabla.innerHTML='';
        alert('hola');
        boton.innerHTML='';
        boton.removeAttribute('type');
       
    }

}