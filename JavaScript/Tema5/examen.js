let usuario = document.getElementById('usuario');
let p = document.createElement('p');
function validar() {

    if (usuario.value == 'empleado' || usuario.value == 'administrador') {
        localStorage.setItem('usuario', usuario.value);



        window.location.href = 'form2.html';

    }
    else {

        p.innerHTML = '';
        let contenido = document.createTextNode('Error, usuario o contraseña incorrectos');
        p.appendChild(contenido);
        document.body.appendChild(p);
    }
}
let tabla = document.createElement('table');

let fila, celda, contenido, formulario, valid = false,boton;
function almacenar() {
    tabla.style.border = '1px solid black';
    document.body.appendChild(tabla);

    usuario = localStorage.getItem('usuario');

    if (usuario == 'empleado') {
        if (valid == false) {


            fila = document.createElement('tr');

            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Tarea')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Descripción')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Importancia')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Duración')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            form = document.getElementById('form');
            fila = document.createElement('tr');
            for (let i = 0; i < form.elements.length; i++) {

                if (form.elements[i].type != 'button') {

                    contenido = form.elements[i].value;
                    agregarCelda(fila, contenido);

                }
            }
            valid = true;
        }
        else {
            fila = document.createElement('tr');
            for (let i = 0; i < form.elements.length; i++) {

                if (form.elements[i].type != 'button') {

                    contenido = form.elements[i].value;
                    agregarCelda(fila, contenido);

                }
            }
        }
    }
    else {
        if (valid == false) {
            boton=document.createElement('button');
            boton.setAttribute('type','button');
            boton.setAttribute('onclick','borrar()');
            boton.innerHTML='Borrar';
        form.appendChild(boton);
            
            fila = document.createElement('tr');

            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Tarea')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Descripción')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Importancia')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Duración')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Realizado')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            celda = document.createElement('th');
            celda.style.border = '1px solid';
            contenido = document.createTextNode('Borrar')
            celda.appendChild(contenido);
            fila.appendChild(celda);
            tabla.appendChild(fila);
            form = document.getElementById('form');
            fila = document.createElement('tr');
            for (let i = 0; i < form.elements.length; i++) {

                if (form.elements[i].type != 'button') {

                    contenido = form.elements[i].value;
                    agregarCelda(fila, contenido);

                }
            }
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            agregar(celda, contenido);
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            contenido.setAttribute('class', 'borrar');
           
            agregar(celda, contenido);
            valid = true;
        }
        else{
            form = document.getElementById('form');
            fila = document.createElement('tr');
            for (let i = 0; i < form.elements.length; i++) {

                if (form.elements[i].type != 'button') {

                    contenido = form.elements[i].value;
                    agregarCelda(fila, contenido);

                }
            }
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            agregar(celda, contenido);
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            contenido.setAttribute('class', 'borrar');
           
            agregar(celda, contenido);
        }
    }

}


function agregarCelda(fila, contenido) {
    celda = document.createElement('td');
    celda.style.border = '1px solid';
    contenido = document.createTextNode(contenido);
    celda.appendChild(contenido);
    fila.appendChild(celda);
    tabla.appendChild(fila);
}

function agregar(celda,contenido) {

    celda.appendChild(contenido);
    fila.appendChild(celda);
    tabla.appendChild(fila);
}

function borrar(){
    let borrar=document.getElementsByClassName('borrar');
    let padre;
    for(let i=0;i<borrar.length;i++){
        if(borrar[i].checked){
            padre=borrar[i].parentNode;
            padre=padre.parentNode;
            padre.parentNode.removeChild(padre);
            i--;
        }
    }
}