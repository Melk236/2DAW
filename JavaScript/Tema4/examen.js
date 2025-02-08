let boton=document.getElementById('boton');
let tabla;
    
        boton.addEventListener('click',()=>{

            if(document.getElementById('nombre').value=='usuario' || document.getElementById('administrador').value=='administrador'){
                window.location.href='formulario.html';
            }
           



        });
        function almacenar(){
            let contenedor=document.getElementById('tabla');
            tabla=document.createElement('table');
           contenedor.appendChild(tabla);
           tabla.style.border='solid 1px';
            let fila=document.createElement('tr');
            tabla.appendChild(fila);
            agregarCelda(fila,'Nombre');
            agregarCelda(fila,'Descripción');
            agregarCelda(fila,'Importancia');
            agregarCelda(fila,'Duración estimada');

            
           
            
        }

        function agregarCelda(fila,contenido){
            
            let columna=document.createElement('td');
            columna.style.border='solid 1px';
             contenido=document.createTextNode(contenido);
            columna.appendChild(contenido);
            fila.appendChild(columna);

        }
       



    

