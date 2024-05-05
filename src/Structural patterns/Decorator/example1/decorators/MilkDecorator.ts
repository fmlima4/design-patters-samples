import { CoffeeDecorator } from './CoffeeDecorator';

class MilkDecorator extends CoffeeDecorator {
    private coffee: CoffeeDecorator;

    constructor(coffee: CoffeeDecorator) {
        super(coffee.getName() + ', Milk');
        this.coffee = coffee;
    }

    getName(): string {
        return this.coffee.getName() + ', Milk';
    }
}

export { MilkDecorator };
