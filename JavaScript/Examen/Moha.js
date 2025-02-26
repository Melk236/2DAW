//Creamos variables globlaes parra acceder a los input y despues modificar el DOM
let nombre=document.getElementById('nombre');
let apellidos=document.getElementById('ap');
let codigo=document.getElementById('cod');
let boton=document.createElement('button');
let botA;

function validar(){
    //Creamos los dos patrones para validar el nombre,apellidos y la contraseña
    let patron=/^[a-zA-Z]+$/;
    let patronCod=/^([A-Z]{1}[0-9]{4}|[0-9]{4}[A-Z]{1})$/;
    let error=document.getElementById('errores');
    error.innerHTML='';
    alert(patronCod.test(codigo.value));//Con el .test se valida los patrones
    if(!patron.test(nombre.value) || !patron.test(apellidos.value)|| !patronCod.test(codigo.value)){
        error.innerHTML='Error,nombre o apellidos incorrectos ';
        
    }
    else{
        error.innerHTML='Formulario enviado correctamente';
    }


}
function validar2(){//En la segunda funcion validamos el segundo formulario
     usuario=document.getElementById('usuario').value;
     clave=document.getElementById('clave').value;
    let p=document.getElementById('error');
    let patron=/^[A-Z]$/;
    let cl;
    cl=codigo.value.split('');//Covertimos el codigo en un array
    
    for(let i=0;i<cl.length;i++){//Eliminamos la letra
        if(patron.test(cl[i])){
            cl.splice(i,i+1);
            
        }
    }
    cl=cl.join('',codigo);//Volvemos a convertilo a string
    p.innerHTML='';
    if(usuario=='Admin' && clave==cl){//Validamos el formulario
        p.innerHTML='Usuario y clave correctas';
       
        let contenido=document.createTextNode('Cambiar a inglés');
        boton.appendChild(contenido);
        document.body.appendChild(boton);
        boton.setAttribute('onclick','cambiarIdioma()');//Creamos los botones de cambio de idioma y salir del administrador
         botA=document.createElement('button');
     contenido=document.createTextNode('Salir modo administrador');
     botA.setAttribute('onclick','salir()');//Le creamos el atributo onclick para que cuando pulsemos entramos a la función
    botA.appendChild(contenido);
    document.body.appendChild(botA);
    }
    else{
        p.innerHTML='Inténtalo de nuevo';//Le ponemos un mensaje de error
       
    }
    setTimeout(salir,5000);//Si el usuario no pulsa el boton de salir se sale en 5 segundos
    
}
function cambiarIdioma(){
    
   
    if(boton.textContent=='Cambiar a inglés'){//Para el idioma cogemos el valor del boton y comprobamos enq ue idioma estamos
        let label=document.getElementsByTagName('label');
        let bot=document.getElementsByTagName('button');
        bot[0].innerHTML='Sent';
        bot[1].innerHTML='Sent';
        label[0].innerHTML='Name';
        label[1].innerHTML='Last name';
        label[2].innerHTML='Password';
        label[3].innerHTML='Administrator';
        label[4].innerHTML='Code';
        boton.innerHTML='Cambiar a español';//Cambiamos el valor del botón para poder ir cambiando de idioma
    
    }
    else if(boton.textContent=='Cambiar a español'){
        let label=document.getElementsByTagName('label');
        let bot=document.getElementsByTagName('button');
        bot[0].innerHTML='Enviar';
        bot[1].innerHTML='Enviar';
        label[0].innerHTML='Nombre';
        label[1].innerHTML='Apellidos';
        label[2].innerHTML='Contraseña';
        label[3].innerHTML='Usuario administrador';
        label[4].innerHTML='Clave de acceso';
        boton.innerHTML='Cambiar a inglés';

    }
   
    

}
function salir(){
    let p=document.getElementById('error');
    p.innerHTML='';
    
    botA.parentNode.removeChild(botA);//Eliminanos los botones con el nodo padre
    boton.parentNode.removeChild(boton);


}