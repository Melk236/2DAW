function comGrosor(){

    let tabla=document.getElementById('tabla1');

    let borde=tabla.getAttribute('border');

    document.getElementById('parrafo').innerHTML=borde;
  
}

function auGrosor(){
    let tabla=document.getElementById('tabla1');
   let borde=tabla.getAttribute('border');

   borde=Number(borde);
   borde+=1;

   tabla.setAttribute('border',borde);
      
}

function disGrosor(){

    let tabla=document.getElementById('tabla1');
    let borde=tabla.getAttribute('border');

    borde=Number(borde);
    borde-=1;
    if(borde<1){
        return;
    }
    else{
    tabla.setAttribute('border',borde);
    }
    
}