import { Component } from '@angular/core';
import { Circulo } from '../models/Circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
})
export class CirculoComponent {
  radio: number = 0; 
 perimetro: number = 0; // Inicializa con un valor por defecto

  calcular() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}