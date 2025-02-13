let boton = document.getElementById('boton');
let tabla, validar = false, fila;


function enviar() {
    let nombre = document.getElementById('nombre').value;
    if (document.getElementById('nombre').value == 'empleado' || document.getElementById('nombre').value == 'administrador') {

       
        localStorage.setItem('nombre', nombre);
        window.location.href = 'formulario.html';


    }
    else {
        document.getElementById('error').innerHTML = 'Usuario incorrecto';
    }

}



function almacenar() {
    let nombre = localStorage.getItem('nombre');

    if (nombre == 'empleado') {
        if (validar == false) {
            let contenedor = document.getElementById('tabla');
            tabla = document.createElement('table');

            contenedor.appendChild(tabla);
            tabla.style.border = 'solid 1px';
            fila = document.createElement('tr');
            tabla.appendChild(fila);
            agregarCelda(fila, 'Nombre');
            agregarCelda(fila, 'Descripción');
            agregarCelda(fila, 'Importancia');
            agregarCelda(fila, 'Duración estimada');
            agregarCelda(fila,'Realizado');
            validar = true;
            let form = document.getElementById('form');
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type !== 'button') {
                    agregarCelda(fila, form.elements[i].value);
                }
            }
            let realizar=document.createElement('input');
            realizar.setAttribute('type','checkbox');
           
            agregarCeldaCheck(fila,realizar);
        }
        else {
            let form = document.getElementById('form');
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type !== 'button') {
                    agregarCelda(fila, form.elements[i].value);
                }
            }
            let realizar=document.createElement('input');
            realizar.setAttribute('type','checkbox');
           
            agregarCeldaCheck(fila,realizar);
        }
    }
    
    else {  
        if(validar==false){
            let form=document.getElementById('form');
             let boton=document.createElement('button');
             let contenido=document.createTextNode('Borrar');
             boton.appendChild(contenido);
             boton.setAttribute('type','button');
             boton.setAttribute('id','bor')
             boton.setAttribute('onclick','borrar()');
             form.appendChild(boton);
            let contenedor=document.getElementById('tabla');
            tabla=document.createElement('table');
            contenedor.appendChild(tabla);
            tabla.style.border='1px solid';
    
            let fila=document.createElement('tr');
            tabla.appendChild(fila);
            agregarCelda(fila,'Nombre');
            agregarCelda(fila,'Descripción');
            agregarCelda(fila,'Importancia');
            agregarCelda(fila,'Duración estimada');
            agregarCelda(fila,'Realizado');
            agregarCelda(fila,'Borrar');
            validar=true;
            fila=document.createElement('tr');
            tabla.appendChild(fila);
            for(let i=0;i<form.elements.length;i++){
                if(form.elements[i].type!=='button'){
                    agregarCelda(fila,form.elements[i].value);
                }
            }
            
            let realizar=document.createElement('input');
            realizar.setAttribute('type','checkbox');
           
            agregarCeldaCheck(fila,realizar);
             let borrar=document.createElement('input');
            borrar.setAttribute('type','checkbox');
            borrar.setAttribute('class','1');
            agregarCeldaCheck(fila,borrar);
            
            
        }
        else{
            
            let form=document.getElementById('form');
            
    
            let fila=document.createElement('tr');
            tabla.appendChild(fila);
            for(let i=0;i<form.elements.length;i++){
                if(form.elements[i].type!=='button'){
                    agregarCelda(fila,form.elements[i].value);
                }
            }
            
            let realizar=document.createElement('input');
            realizar.setAttribute('type','checkbox');
           
            agregarCeldaCheck(fila,realizar);
             let borrar=document.createElement('input');
            borrar.setAttribute('type','checkbox');
            borrar.setAttribute('class','1');
            agregarCeldaCheck(fila,borrar);
            
             
        }
        

    }


}

function agregarCelda(fila, contenido) {
    if (validar == false) {
        let columna = document.createElement('th');
        columna.style.border = 'solid 1px';
        contenido = document.createTextNode(contenido);
        columna.appendChild(contenido);
        fila.appendChild(columna);

    }
    else {
        let columna = document.createElement('td');
        columna.style.border = 'solid 1px';
        contenido = document.createTextNode(contenido);
        columna.appendChild(contenido);
        fila.appendChild(columna);

    }

}

function agregarCeldaCheck(fila,contenido){
    let columna=document.createElement('td');
    columna.style.border='1px solid';
    fila.appendChild(columna);
    columna.appendChild(contenido);
}

function borrar(){
    let celdasBorrar=document.getElementsByClassName('1');
            
    for(let i=0;i<celdasBorrar.length;i++){
       if(celdasBorrar[i].checked){
        let padre=celdasBorrar[i].parentNode;
        padre=padre.parentNode;
        
         padre.parentNode.removeChild(padre);
        i--;
       }
       
    }

}