function grosorCelda() {

    let tabla = document.getElementById('tabla1'); //Guardamos la etiqueta table en la variable tabla
  
    let estilo=tabla.getAttribute('border');//Guardamos en la variable estilo el atributo borde.
    document.getElementById('parrafo').innerHTML ='El borde de la tabla es: '+ estilo; //Mostramos el borde de la tabla en una etiqueta p.

}