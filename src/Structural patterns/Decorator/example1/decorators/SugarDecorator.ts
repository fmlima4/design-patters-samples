import { CoffeeDecorator } from './CoffeeDecorator';

class SugarDecorator extends CoffeeDecorator {
    private coffee: CoffeeDecorator;

    constructor(coffee: CoffeeDecorator) {
        super(coffee.getName() + ', Sugar');
        this.coffee = coffee;
    }

    getName(): string {
        return this.coffee.getName() + ', Sugar';
    }
}

export { SugarDecorator };
