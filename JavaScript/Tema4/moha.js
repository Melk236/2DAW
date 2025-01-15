

window.onload = () => {
    let color1 = document.getElementsByClassName('color1')[0];
    let color2 = document.getElementsByClassName('color2')[0];
    let color3 = document.getElementsByClassName('color3')[0];
    let color4 = document.getElementsByClassName('color4')[0];
    let color5 = document.getElementsByClassName('color5')[0];
    let color6 = document.getElementsByClassName('color6')[0];
    
    let tabla = document.createElement('table');
    let fila;
    let columnas
    tabla.style.border = '1px solid black';

    for (let i = 0; i < 30; i++) {
       fila = document.createElement('tr');
        tabla.appendChild(fila);

        for (let j = 0; j < 30; j++) {

             columnas = document.createElement('td');
            fila.appendChild(columnas);
            columnas.style.border = '1px solid black';
            columnas.style.width = '10px';
            columnas.style.height = '10px';
        }


    }

    let contenedor = document.getElementById('zonadibujo');
    let pincel=document.getElementById('pincel');
    contenedor.appendChild(tabla);
    color1.addEventListener('click', () => {
        pincel.innerHTML='Pincel: Color Amarillo';
        color1.classList.toggle('seleccionado');
        color2.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');

    });

    color2.addEventListener('click', () => {
        pincel.innerHTML='Pincel: Color Verde';
        color2.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');

    });

    color3.addEventListener('click', () => {
        pincel.innerHTML='Pincel: Color Negro';
        color3.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');

    });
    color4.addEventListener('click', () => {
        pincel.innerHTML='Pincel: Color Rojo';
        color4.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');

    });
    color5.addEventListener('click', () => {
        pincel.innerHTML='Pincel: Color Azul';
        color5.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        
    });
    color6.addEventListener('click', () => {
        pincel.innerHTML='Pincel: Color Blanco';
        color6.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');
        
    });

    td.addEventListener('mouseover',()=>{

       td.style.color=color1;


    });
    
};



