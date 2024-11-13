//Sec crea una funcion para realizar las comprobaciones del nuestros 4 triangulos
function triangulo(){
    let l1,l2,l3,contador=0,equilatero=0,escaleno=0,isosceles=0;//Se definen las variables para su posterior uso

    do{//El bucle principal para que se introduzca justo 4 triangulos.

    l1=prompt('Introduzca la longitud del lado');//Pedimos al usuario que nos introduzca la longitud de los lados
    l1=Number(l1);//Se pasa a numero la longitud de cada lado

        if(l1<=0){/*Comprobamos que el lado no es cero y es positivo, 
                    si no cumple con la condicion vamos preguntadole al usuario en un bucle hasta que la condicion de que sea positiva se cumpla*/
            do{
                l1=prompt('Error, vuelva a introducir un lado');
                l1=Number(l1);   
            }while(l1<=0);
        
        }

    l2=prompt('Introduzca la longitud del lado');
    l2=Number(l2);

    if(l2<=0){
        do{
            l2=prompt('Error, vuelva a introducir un lado');
            l2=Number(l2);   
        }while(l2<=0);
    
    }
    l3=prompt('Introduzca la longitud del lado');
    l3=Number(l3);
    
    if(l3<=0){
        do{
            l3=prompt('Error, vuelva a introducir el lado');
            l3=Number(l3);   
        }while(l3<=0);
    
    }
    

       
    if(l1+l2>l3&&l2+l3>l1&&l1+l3>l2){//Con este if comprobamos que la suma de dos cualesquiera lados sea mayor que el tercer lado
        
        if(l1==l2&&l2==l3&&l1==l3){//este if comprueba que los tres lados son iguales(equilatero).
            alert('Es un triangulo equilatero');
            equilatero++;//Aumentamos el contador  para despues visualizar cuantos triangulos de cad tipo tenemmos
        }
        else if(l1==l2||l2==l3||l3==l1){//este if comprueba que los dos lados son iguales(isosceles).
            alert('Es un triangulo isosceles');
            isosceles++;//Aumentamos el contador  para despues visualizar cuantos triangulos de cad tipo tenemmos

        }
        else{
            alert('Es un triangulo escaleno');
            escaleno++;
        }
        contador++;//Aumentamos el contador pasando al siguiente triangulo
    }
    else{
        alert('ERROR, el triangulo no cumple una de las propiedades de los triangulos');
        //Si no se cumple la propiedad no aumentamos el contador,para tener exactamen 4 triangulos introducidos
    }

    
    }while(contador<4);
    //Visualizamos cuantos triangulos tenemos de cada tipo.
    document.write('Hay '+equilatero+' triangulos equilateros<br>');
    document.write('Hay '+isosceles+' triangulos isosceles<br>');
    document.write('Hay '+escaleno+' triangulos escalenos<br>');

        //Con esta serie de if anidados,vemos cual es el hay en menor cantidad
    if(equilatero<escaleno){
        if(equilatero<isosceles){
            document.write('Hay menor cantidad de triangulos equilateros: '+equilatero);
        }
        else if(equilatero==isosceles){
            document.write('Hay menor cantidad de triangulos equilateros: '+equilatero+'<br>');
            document.write('Y tambien hay menor cantidad de triangulos isosceles: '+isosceles);
        }

        
    }
    else if(isosceles<equilatero){
        if(isosceles<escaleno){
            document.write('Hay menor cantidad de triangulos isosceles: '+isosceles+'<br>');
        }
        else if(isosceles==escaleno){
            document.write('Hay menor cantidad de triangulos isosceles: '+isosceles+'<br>');
            document.write('Hay menor cantidad de triangulos escalenos: '+escaleno);
        }
        
    }
    else if(equilatero==escaleno){
        document.write('Hay menor cantidad de triangulos escalenos: '+escaleno+'<br>');
        document.write('Hay menor cantidad de triangulos equilateros: '+equilatero+'<br>');

    }
    else{
        document.write('Hay menor cantidad de triangulos escalenos: '+escaleno+'<br>');
        
        
    }

}
triangulo();//Se realiza la llmada de la funcion.