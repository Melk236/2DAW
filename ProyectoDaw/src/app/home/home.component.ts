import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //Variables
  preguntas: string[] = ['¿Quién ganó el Mundia de 1986?', '¿Cuántos Balones de Oro ha ganado Lionel Messi?', '¿En qué año se jugó el primer Mundial de fútbol?'];
  respuestas: string[] = ['Argentina', '8', '1930'];
  indice: number = 0;
  correcta: boolean | null = null;
  selectedOption: number = 0;
  numCorrectas:number=0;

  trivia(evento: Event) {
    const elemento = evento.currentTarget as HTMLElement;
    if (this.selectedOption > 0) {
      return;
    }
   console.log(elemento);
    const todasLasOpciones = Array.from(document.querySelectorAll('.option-box'));
    console.log(todasLasOpciones);
    this.selectedOption = todasLasOpciones.indexOf(elemento as Element)+1;
    
    if (elemento.innerText == this.respuestas[this.indice]) {
      this.correcta = true;
      this.numCorrectas++;

    }
    else {
      this.correcta = false;
    }
    setTimeout(() => {
      this.indice++;
      this.correcta = null;
      this.selectedOption = 0;
    }, 1500);

    if (this.indice == 3) {
      this.indice = 0;
    }
    
  }

  reiniciarQuizz(){
    this.indice=0;
    this.numCorrectas=0;
  }
}
