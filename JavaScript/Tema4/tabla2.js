function comGrosor(){

    let tabla=document.getElementById('tabla1');

    let estilo=window.getComputedStyle(tabla);
    
    document.getElementById('parrafo').innerHTML='El grosor es '+estilo.borderWidth;
}

function auGrosor(){
    let tabla=document.getElementById('tabla1');

    let grosor=tabla.style.borderWidth;
    grosor=grosor.replace('px','');
 
    grosor=Number(grosor);
    grosor+=1;
 
    tabla.style.borderWidth=grosor;
   
}

function disGrosor(){

    let tabla=document.getElementById('tabla1');

    let grosor=tabla.style.borderWidth;
    grosor=grosor.replace('px','');
 
    grosor=Number(grosor);
    grosor-=1;
 
    tabla.style.borderWidth=grosor;
   
}