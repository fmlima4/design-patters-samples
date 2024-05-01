import { OldCalculator } from '../interfaces/OldCalculator';
import { NewCalculator } from '../services/NewCAlculator';

class NewCalculatorAdapter implements OldCalculator {
    private newCalculator: NewCalculator;

    constructor() {
        this.newCalculator = new NewCalculator();
    }

    calculate(num1: number, num2: number): number {
        return this.newCalculator.add(num1, num2);
    }
}

export { NewCalculatorAdapter };
