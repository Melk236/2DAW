let boton=document.getElementById('boton');
    boton.addEventListener('click',()=>{
        let usuario=document.getElementById('nombre').value;
    
        if(usuario!=='usuario' && usuario!=='administrador'){
         document.getElementById('error').innerHTML='Usuario o contraseña incorrectos';
        }
        else{
         window.location.href='formulario.html';
        }
        function almacenar(){
            if(usuario=='usuario'){
            let contenedor=document.getElementById('tabla');
            let tabla=document.createElement('table');
            tabla.appendChild(contendor);
            let columna=d;


            }
        }


    });
    

