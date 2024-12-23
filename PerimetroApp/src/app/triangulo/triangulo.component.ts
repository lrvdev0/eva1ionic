import { Component } from '@angular/core';
import { TrianguloEscaleno } from '../models/TrianguloEscaleno';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
})
export class TrianguloComponent {
  lado1: number = 0; // Inicializa con un valor por defecto
  lado2: number = 0; 
  lado3: number = 0; 
  perimetro: number = 0; 

  calcular() {
    const triangulo = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
    this.perimetro = triangulo.calcularPerimetro();
  }
}