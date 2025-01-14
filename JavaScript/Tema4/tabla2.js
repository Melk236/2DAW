function comGrosor(){

    let tabla=document.getElementById('tabla1');

    let estilo=window.getComputedStyle(tabla);
    
    document.getElementById('parrafo').innerHTML='El grosor es '+estilo.borderWidth;
}

function auGrosor(){
    
    let tabla=document.getElementById('tabla1');

    let grosor=tabla.getAttribute('border');
    grosor=Number(grosor);
   
    grosor+=1;
    
    
    tabla.setAttribute('border',grosor);
      
}

function disGrosor(){

    let tabla=document.getElementById('tabla1');
    let grosor=tabla.getAttribute('border');
    grosor=Number(grosor);
    tabla=document.getElementsByTagName('tabla1');
    
    grosor-=1;

    
    tabla.setAttribute('border',grosor);
    
    
}