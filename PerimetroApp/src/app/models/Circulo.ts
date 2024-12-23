import { FiguraGeometrica } from './FiguraGeometrica';

export class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super();
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}