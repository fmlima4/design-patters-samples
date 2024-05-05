import { Coffee } from '../entities/Coffee';

abstract class CoffeeDecorator extends Coffee {
    abstract getName(): string;
}

export { CoffeeDecorator };
