let frase;
    const aux = [];
function texto() {
    

    const rojo = ['Queridos compañeros', 'Por otra parte, y dados los condicionamientos actuales', 'Asimismo,', 'Sin embargo no hemos de olvidar que', 'De igual manera,', 'La práctica de la vida cotidiana prueba que,', 'No es indispensable argumentar el peso y la significación de estos problemas ya que,', 'Las experiencias ricas y diversas ,uestran que,', 'El afán de organización,pero sobre todo', 'Los superiores principios ideológicos,condicionan que', 'Incluso,bien pudiéramos atrevernos a sugerir que', 'Es obvio señalar que,', 'Pero pecaríamos de insinceros si soslayásemos que,', 'Y además, quedaríamos inmersos en la mñas abyecta de las estulticias si no fueramos consacientes de que,'];
    const azul = ['la realización de las premisas del programa', 'la complejidad de los estudios de los dirigentes', 'el aumento constante,en cantidad y en extensión, de nuestra actividad', 'la estructura actual de la organización', 'el nuevo modelo de actividad de la organización', 'el desarrollo continuo de distintas formas de actividad', 'nuestra actividad de información y propaganda', 'el reforzamiento y desarrollo de las estructuras', 'la consulta con los numeros militantes', 'el inicio de la acción general de formación de las actitudes', 'un relanzamiento específico de todos los dectores implicados', 'la superación de experiencias periclitadas', 'una aplicación indiscriminada de los factores confluyentes', 'la condición sine qua non rectora del proceso'];
    const verde = ['nos obliga a un exhaustivo análisi', 'cumple un rol esencial en la formación', 'exige la precisión y la determinación', 'ayuda a la preparación y a la realización', 'garantiza la participación de un grupo importante en la formación', 'cumple deberes importantes en la determinación', 'facilita en la creación', 'obstaculiza la apreciación de la importancia', 'ofrece un ensayo interesante de verificación', 'implica el proceso de reestructuación y modernización', 'habrá de significar un auténtico y eficaz punto de partida', 'permite en todo caso explicar las razones fundamentales', 'asegura,en todo caso, un proces muy sensible d einversión', 'radica en una elaboración cuidadosa y sistemática en las estrategias adecuadas'];
    const amarillo = ['de las condiciones financieras y administrativas existentes', 'de las directivas de desarrollo para el futuro', 'del sistema de participación general', 'de las actitudes de los miembros hacia sus deberes ineludibles', 'de las nuevas proposiciones', 'de las direcciones educativas en el sentido del progreso', 'del sistema de formación de cuadros que corresponda a las necesidades', 'de las condiciones de las actividades apropiadas', 'del modelo de desarollo', 'de las formas de acción', 'de las básicas premisas adoptadas', 'de toda una casuística de amplio espectro', 'de los elementos generadores', 'para configurar una interface amigable y coadyuvante a la reingeniería del sitema'];
    if(aux.length<38416){

    
    frase = rojo[Math.floor(Math.random() * 14)] + ' ' + azul[Math.floor(Math.random() * 14)] + ' ' + verde[Math.floor(Math.random() * 14)] + ' ' + amarillo[Math.floor(Math.random() * 14)];

        if(!aux.includes(frase)){
            document.getElementById('frase').innerHTML=frase;
            aux.push(frase);
        }
        else{
           
        while(aux.includes(frase)){
            frase = rojo[Math.floor(Math.random() * 14)] + ' ' + azul[Math.floor(Math.random() * 14)] + ' ' + verde[Math.floor(Math.random() * 14)] + ' ' + amarillo[Math.floor(Math.random() * 14)];
        }
        document.getElementById('frase').innerHTML=frase;
        aux.push(frase);

    }
}
else{
    document.getElementById('frase').innerHTML='no hay mas combinaciones';
}
        
    
}



