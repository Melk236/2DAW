function comGrosor(){

    let tabla=document.getElementById('tabla1');

    let estilo=window.getComputedStyle(tabla);
    
    document.getElementById('parrafo').innerHTML='El grosor es '+estilo.borderWidth;
}

function auGrosor(){

    let tabla=document.getElementById('tabla1');
    tabla.style.borderWidth=document.getElementById('aumento').value;
}

function disGrosor(){

    let tabla=document.getElementById('tabla1');
    tabla.style.borderWidth=document.getElementById('dis').value;
}