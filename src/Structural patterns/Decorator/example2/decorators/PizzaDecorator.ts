import { Pizza } from '../entities/Pizza';

abstract class PizzaDecorator extends Pizza {
    abstract getName(): string;
}

export { PizzaDecorator };
