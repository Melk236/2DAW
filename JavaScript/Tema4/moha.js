

window.onload = () => {
    let color1 = document.getElementsByClassName('color1')[0];
    let color2 = document.getElementsByClassName('color2')[0];
    let color3 = document.getElementsByClassName('color3')[0];
    let color4 = document.getElementsByClassName('color4')[0];
    let color5 = document.getElementsByClassName('color5')[0];
    let color6 = document.getElementsByClassName('color6')[0];
    let colorDefinitivo;
    let estilo;
    colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

    estilo = window.getComputedStyle(colorDefinitivo);
    let tabla = document.createElement('table');
    let fila;
    let columnas
    tabla.style.border = '1px solid black';

    for (let i = 0; i < 30; i++) {
        fila = document.createElement('tr');
        tabla.appendChild(fila);

        for (let j = 0; j < 30; j++) {

            columnas = document.createElement('td');
            columnas.classList.add('col');
            fila.appendChild(columnas);
            columnas.style.border = '1px solid black';
            columnas.style.width = '10px';
            columnas.style.height = '10px';
        }


    }

    let contenedor = document.getElementById('zonadibujo');
    let pincel = document.getElementById('pincel');
    pincel.innerHTML = 'Pincel desactivado';
    contenedor.appendChild(tabla);
    color1.addEventListener('click', () => {
        pincel.innerHTML = 'Pincel: Color Amarillo';
        color1.classList.toggle('seleccionado');
        color2.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');
        colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

        estilo = window.getComputedStyle(colorDefinitivo);

    });

    color2.addEventListener('click', () => {

        color2.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');
        colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

        estilo = window.getComputedStyle(colorDefinitivo);

    });

    color3.addEventListener('click', () => {

        color3.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');
        colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

        estilo = window.getComputedStyle(colorDefinitivo);

    });
    color4.addEventListener('click', () => {

        color4.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');
        colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

        estilo = window.getComputedStyle(colorDefinitivo);

    });
    color5.addEventListener('click', () => {

        color5.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color6.classList.remove('seleccionado');
        colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

        estilo = window.getComputedStyle(colorDefinitivo);

    });
    color6.addEventListener('click', () => {

        color6.classList.toggle('seleccionado');
        color1.classList.remove('seleccionado');
        color3.classList.remove('seleccionado');
        color2.classList.remove('seleccionado');
        color4.classList.remove('seleccionado');
        color5.classList.remove('seleccionado');
        colorDefinitivo = document.getElementsByClassName('seleccionado')[0];

        estilo = window.getComputedStyle(colorDefinitivo);

    });



    columnas = document.getElementsByClassName('col');
    let activo = true;
    tabla.addEventListener('click', () => {
        
        if (activo) {
            for (let i = 0; i < columnas.length; i++) {
                columnas[i].addEventListener('mouseover', cambiarColor);
            }

            activo = false;
        }
        else {
            pincel.innerHTML = 'Pincel desactivado';
            for (let i = 0; i < columnas.length; i++) {
                columnas[i].removeEventListener('mouseover', cambiarColor);
            }
            activo = true;
        }


    });
    function cambiarColor(event) {
        pincel.innerHTML = 'Pincel activado';
        event.target.style.backgroundColor = estilo.backgroundColor;
    }

};



