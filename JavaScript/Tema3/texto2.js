
// Arreglo auxiliar para guardar las frases generadas y evitar repeticiones
let aux = [];

// Función principal que genera frases aleatorias
function texto() {
    // Listas de frases para cada color
    var rojo = [
        'Queridos compañeros', 
        'Por otra parte, y dados los condicionamientos actuales', 
        'Asimismo,', 
        'Sin embargo no hemos de olvidar que', 
        'De igual manera,', 
        'La práctica de la vida cotidiana prueba que,', 
        'No es indispensable argumentar el peso y la significación de estos problemas ya que,', 
        'Las experiencias ricas y diversas muestran que,', 
        'El afán de organización, pero sobre todo', 
        'Los superiores principios ideológicos, condicionan que', 
        'Incluso, bien pudiéramos atrevernos a sugerir que', 
        'Es obvio señalar que,', 
        'Pero pecaríamos de insinceros si soslayásemos que,', 
        'Y además, quedaríamos inmersos en la más abyecta de las estulticias si no fuéramos conscientes de que,'
    ];
    var azul = [
        'la realización de las premisas del programa', 
        'la complejidad de los estudios de los dirigentes', 
        'el aumento constante, en cantidad y en extensión, de nuestra actividad', 
        'la estructura actual de la organización', 
        'el nuevo modelo de actividad de la organización', 
        'el desarrollo continuo de distintas formas de actividad', 
        'nuestra actividad de información y propaganda', 
        'el reforzamiento y desarrollo de las estructuras', 
        'la consulta con los numerosos militantes', 
        'el inicio de la acción general de formación de las actitudes', 
        'un relanzamiento específico de todos los sectores implicados', 
        'la superación de experiencias periclitadas', 
        'una aplicación indiscriminada de los factores confluyentes', 
        'la condición sine qua non rectora del proceso'
    ];
    var verde = [
        'nos obliga a un exhaustivo análisis', 
        'cumple un rol esencial en la formación', 
        'exige la precisión y la determinación', 
        'ayuda a la preparación y a la realización', 
        'garantiza la participación de un grupo importante en la formación', 
        'cumple deberes importantes en la determinación', 
        'facilita en la creación', 
        'obstaculiza la apreciación de la importancia', 
        'ofrece un ensayo interesante de verificación', 
        'implica el proceso de reestructuración y modernización', 
        'habrá de significar un auténtico y eficaz punto de partida', 
        'permite en todo caso explicar las razones fundamentales', 
        'asegura, en todo caso, un proceso muy sensible de inversión', 
        'radica en una elaboración cuidadosa y sistemática en las estrategias adecuadas'
    ];
    var amarillo = [
        'de las condiciones financieras y administrativas existentes', 
        'de las directivas de desarrollo para el futuro', 
        'del sistema de participación general', 
        'de las actitudes de los miembros hacia sus deberes ineludibles', 
        'de las nuevas proposiciones', 
        'de las direcciones educativas en el sentido del progreso', 
        'del sistema de formación de cuadros que corresponda a las necesidades', 
        'de las condiciones de las actividades apropiadas', 
        'del modelo de desarrollo', 
        'de las formas de acción', 
        'de las básicas premisas adoptadas', 
        'de toda una casuística de amplio espectro', 
        'de los elementos generadores', 
        'para configurar una interfaz amigable y coadyuvante a la reingeniería del sistema'
    ];

    // Selección aleatoria de una frase de cada color
    let pRojo = rojo[Math.floor(Math.random() * rojo.length)];
    let pAzul = azul[Math.floor(Math.random() * azul.length)];
    let pVerde = verde[Math.floor(Math.random() * verde.length)];
    let pAmarillo = amarillo[Math.floor(Math.random() * amarillo.length)];

    // Combinar las frases seleccionadas para formar una frase completa
    let frase = pRojo + ' ' + pAzul + ' ' + pVerde + ' ' + pAmarillo;

    // Verificar si la frase generada es única
    if (!aux.includes(frase)) {
        // Si es única, agregarla al HTML con los colores correspondientes
        document.getElementById('frase').innerHTML += 
            '<span style="color:red">' + pRojo + '</span>' + 
            '<span style="color:blue"> ' + pAzul + '</span>' + 
            '<span style="color:green"> ' + pVerde + '</span>' + 
            '<span style="color:yellow"> ' + pAmarillo + '</span>' + 
            '<br>';

        // Agregar la frase al arreglo auxiliar
        aux.push(frase);

        // Manejo de cookies: buscar la cookie del contador
        let contador = 0;
        let cookies = document.cookie.split('; '); // Dividir las cookies en pares clave-valor

        // Buscar una cookie llamada 'texto' y actualizar su valor
        for (let i = 0; i < cookies.length; i++) {
            let partes = cookies[i].split('=');
            if (partes[0] === 'texto') {
                contador = parseInt(partes[1]);
            }
        }

        // Incrementar el contador
        contador++;

        // Actualizar la cookie con el nuevo valor del contador
        document.cookie = 'texto=' + contador;

        // Mostrar un mensaje con las cookies actuales
        alert(document.cookie);
    } else {
        // Si la frase ya existe, generar nuevas frases hasta que sea única
        while (aux.includes(frase)) {
            pRojo = rojo[Math.floor(Math.random() * rojo.length)];
            pAzul = azul[Math.floor(Math.random() * azul.length)];
            pVerde = verde[Math.floor(Math.random() * verde.length)];
            pAmarillo = amarillo[Math.floor(Math.random() * amarillo.length)];
            frase = pRojo + ' ' + pAzul + ' ' + pVerde + ' ' + pAmarillo;
        }

        // Agregar la nueva frase al HTML
        document.getElementById('frase').innerHTML += 
            '<span style="color:red">' + pRojo + '</span>' + 
            '<span style="color:blue"> ' + pAzul + '</span>' + 
            '<span style="color:green"> ' + pVerde + '</span>' + 
            '<span style="color:yellow"> ' + pAmarillo + '</span>' + 
            '<br>';

        // Repetir la lógica de actualización de cookies
        let contador = 0;
        let cookies = document.cookie.split('; ');

        for (let i = 0; i < cookies.length; i++) {
            let partes = cookies[i].split('=');
            if (partes[0] === 'contador') {
                contador = parseInt(partes[1]);
            }
        }

        contador++;

        document.cookie = 'contador=' + contador;

        // Agregar la frase al arreglo auxiliar
        aux.push(frase);

        // Mostrar un mensaje con las cookies actuales
        alert(document.cookie);
    }
}
