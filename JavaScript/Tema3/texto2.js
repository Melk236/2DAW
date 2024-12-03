
let aux = [];
function texto() {
    var rojo = ['Queridos compañeros', 'Por otra parte, y dados los condicionamientos actuales', 'Asimismo,', 'Sin embargo no hemos de olvidar que', 'De igual manera,', 'La práctica de la vida cotidiana prueba que,', 'No es indispensable argumentar el peso y la significación de estos problemas ya que,', 'Las experiencias ricas y diversas ,uestran que,', 'El afán de organización,pero sobre todo', 'Los superiores principios ideológicos,condicionan que', 'Incluso,bien pudiéramos atrevernos a sugerir que', 'Es obvio señalar que,', 'Pero pecaríamos de insinceros si soslayásemos que,', 'Y además, quedaríamos inmersos en la mñas abyecta de las estulticias si no fueramos consacientes de que,'];
    var azul = ['la realización de las premisas del programa', 'la complejidad de los estudios de los dirigentes', 'el aumento constante,en cantidad y en extensión, de nuestra actividad', 'la estructura actual de la organización', 'el nuevo modelo de actividad de la organización', 'el desarrollo continuo de distintas formas de actividad', 'nuestra actividad de información y propaganda', 'el reforzamiento y desarrollo de las estructuras', 'la consulta con los numeros militantes', 'el inicio de la acción general de formación de las actitudes', 'un relanzamiento específico de todos los dectores implicados', 'la superación de experiencias periclitadas', 'una aplicación indiscriminada de los factores confluyentes', 'la condición sine qua non rectora del proceso'];
    var verde = ['nos obliga a un exhaustivo análisis', 'cumple un rol esencial en la formación', 'exige la precisión y la determinación', 'ayuda a la preparación y a la realización', 'garantiza la participación de un grupo importante en la formación', 'cumple deberes importantes en la determinación', 'facilita en la creación', 'obstaculiza la apreciación de la importancia', 'ofrece un ensayo interesante de verificación', 'implica el proceso de reestructuación y modernización', 'habrá de significar un auténtico y eficaz punto de partida', 'permite en todo caso explicar las razones fundamentales', 'asegura,en todo caso, un proces muy sensible d einversión', 'radica en una elaboración cuidadosa y sistemática en las estrategias adecuadas'];
    var amarillo = ['de las condiciones financieras y administrativas existentes', 'de las directivas de desarrollo para el futuro', 'del sistema de participación general', 'de las actitudes de los miembros hacia sus deberes ineludibles', 'de las nuevas proposiciones', 'de las direcciones educativas en el sentido del progreso', 'del sistema de formación de cuadros que corresponda a las necesidades', 'de las condiciones de las actividades apropiadas', 'del modelo de desarollo', 'de las formas de acción', 'de las básicas premisas adoptadas', 'de toda una casuística de amplio espectro', 'de los elementos generadores', 'para configurar una interface amigable y coadyuvante a la reingeniería del sitema'];
    let pRojo, pAzul, pVerde, pAmarillo;
    pRojo = rojo[Math.floor(Math.random() * 14)];
    pAzul = azul[Math.floor(Math.random() * 14)];
    pVerde = verde[Math.floor(Math.random() * 14)];
    pAmarillo = amarillo[Math.floor(Math.random() * 14)];
    frase = pRojo + ' ' + pAzul + ' ' + pVerde + ' ' + pAmarillo;

    
    if (!aux.includes(frase)) {

        document.getElementById('frase').innerHTML +='<span style="color:red">'+pRojo+'</span>'+'<span style="color:blue"> '+pAzul+'</span>'+'<span style="color:green"> '+pVerde+'</span>'+'<sapn style="color:yellow"> '+pAmarillo+'</span>'+'<br>';
       aux.push(frase); 
         // Si la matrícula es válida, actualiza el contador de cookies
         let contador = 0;
         let cookies = document.cookie.split('; '); // Dividir todas las cookies en un arreglo
         
         // Recorre las cookies para buscar el contador
         for(let i = 0; i < cookies.length; i++) {
             let partes = cookies[i].split('=');
             // Si se encuentra el contador, lo actualiza
             if(partes[0] == 'texto') {
                 contador = parseInt(partes[1]);
             }
         }
         // Incrementa el contador
         
         contador++;
 
         // Actualiza el valor del contador en las cookies
         document.cookie = 'texto=' + contador;
         alert(document.cookie);

    }

    else {

        while (aux.includes(frase)) {
            pRojo = rojo[Math.floor(Math.random() * 14)];
            pAzul = azul[Math.floor(Math.random() * 14)];
            pVerde = verde[Math.floor(Math.random() * 14)];
            pAmarillo = amarillo[Math.floor(Math.random() * 14)];
            frase = pRojo + ' ' + pAzul + ' ' + pVerde + ' ' + pAmarillo;
        }

        document.getElementById('frase').innerHTML +='<span style="color:red">'+pRojo+'</span>'+'<span style="color:blue"> '+pAzul+'</span>'+'<span style="color:green"> '+pVerde+'</span>'+'<sapn style="color:yellow"> '+pAmarillo+'</span>'+'<br>';
          // Si la matrícula es válida, actualiza el contador de cookies
          let contador = 0;
          let cookies = document.cookie.split('; '); // Dividir todas las cookies en un arreglo
          
          // Recorre las cookies para buscar el contador
          for(let i = 0; i < cookies.length; i++) {
              let partes = cookies[i].split('=');
              // Si se encuentra el contador, lo actualiza
              if(partes[0] == 'contador') {
                  contador = parseInt(partes[1]);
              }
          }
          // Incrementa el contador
          
          contador++;
  
          // Actualiza el valor del contador en las cookies
          document.cookie = 'contador=' + contador;
        aux.push(frase);
          alert(documen.cookie);
    }

}
