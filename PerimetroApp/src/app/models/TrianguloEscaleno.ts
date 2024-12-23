import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
    constructor(private lado1: number, private lado2: number, private lado3: number) {
        super();
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }
}