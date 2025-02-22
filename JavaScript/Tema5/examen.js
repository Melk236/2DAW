
window.onload = () => {
    document.body.innerHTML = '<div id="cont"></div> <h2>Formulario acceso</h2><form><label>Usuario: </label><input type="text" id="usuario"><br><br><label>Contraseña: </label><input type="password" id="contraseña"><br><br><button type="button" onclick="validar()">Enviar</button></form> <p id="error"></p>'
};

let usuario, valid = false,tabla;
function validar() {
    usuario = document.getElementById('usuario');
    if (usuario.value == 'empleado' || usuario.value == 'administrador') {
        document.body.innerHTML = '';
        document.body.innerHTML = '<h2>Formulario Tabla</h2><form id="form"><label>Tarea: </label><input type="text" id="texto"><br><br><label>Descripción: </label><input type="text" id="descrip"><br><br><label>Importancia: </label><select id="importancia"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><br><br><label>Duración estimada: </label><input type="number" id="duracion" min="1" max="120"><br><br> <button type="button" onclick="almacenar()">Almacenar</button></form><br><br>';
    }

    else {

        let error = document.getElementById('error');
        error.innerHTML = 'Error usuario o contraseña incorrectos';
    }
}
function almacenar() {
    let form = document.getElementById('form');
    
    let fila, celda, contenido;

    
    if (usuario.value == 'empleado') {
        if (valid == false) {
            tabla = document.createElement('table');
             document.body.appendChild(tabla);
             tabla.style.border = '1px solid';
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
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type !== 'button') {
                    celda = document.createElement('td');
                    celda.style.border = '1px solid';
                    contenido = document.createTextNode(form.elements[i].value);
                    celda.appendChild(contenido);
                    fila.appendChild(celda);

                }
            }
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            celda.appendChild(contenido);
            fila.appendChild(celda);
            valid=true;
        }
        else {
            
            fila = document.createElement('tr');
            tabla.appendChild(fila);
            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type !== 'button') {
                    celda = document.createElement('td');
                    celda.style.border = '1px solid';
                    contenido = document.createTextNode(form.elements[i].value);
                    celda.appendChild(contenido);
                    fila.appendChild(celda);

                }
            }
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            celda.appendChild(contenido);
            fila.appendChild(celda);
        }



    }
    else{
       
        if(valid==false){
            document.body.innerHTML+='<button type="button" onclick="borrar()">Borrar</button>';
            tabla = document.createElement('table');
            document.body.appendChild(tabla);
            tabla.style.border = '1px solid';
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
               if (form.elements[i].type !== 'button') {
                   celda = document.createElement('td');
                   celda.style.border = '1px solid';
                   contenido = document.createTextNode(form.elements[i].value);
                   celda.appendChild(contenido);
                   fila.appendChild(celda);
    
               }
           }
           celda = document.createElement('td');
           celda.style.border = '1px solid';
           contenido = document.createElement('input');
           contenido.setAttribute('type', 'checkbox');
           celda.appendChild(contenido);
           fila.appendChild(celda);
           celda = document.createElement('td');
           celda.style.border = '1px solid';
           contenido = document.createElement('input');
           contenido.setAttribute('type', 'checkbox');
           contenido.setAttribute('class','borrar');
           celda.appendChild(contenido);
           fila.appendChild(celda);
           valid=true;
        }
        else{
            fila = document.createElement('tr');
            tabla.appendChild(fila);
     
            for (let i = 0; i < form.elements.length; i++) {
                if (form.elements[i].type !== 'button') {
                    celda = document.createElement('td');
                    celda.style.border = '1px solid';
                    contenido = document.createTextNode(form.elements[i].value);
                    celda.appendChild(contenido);
                    fila.appendChild(celda);
     
                }
            }
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            celda.appendChild(contenido);
            fila.appendChild(celda);
            celda = document.createElement('td');
            celda.style.border = '1px solid';
            contenido = document.createElement('input');
            contenido.setAttribute('type', 'checkbox');
            contenido.setAttribute('class','borrar');
            celda.appendChild(contenido);
            fila.appendChild(celda); 
        }
      
    }



}
function borrar(){

    let celdas=document.getElementsByClassName('borrar');
    let padre;
    for(let i=0;i<celdas.length;i++){
        if(celdas[i].checked){
            padre=celdas[i].parentNode;
            padre=padre.parentNode;
            padre.parentNode.removeChild(padre);
            i--;
        }
    }

}