function grosorCelda() {

    let tabla = document.getElementById('tabla1');//Guardamos la etiqueta table en la variable tabla

    let estilo = window.getComputedStyle(tabla);//El método getComputedStyle nos permite acceder a los estilos finales del elemento

    document.getElementById('parrafo').innerHTML = estilo.borderWidth;//Mostramos el borde de la tabla en una etiqueta p.
}