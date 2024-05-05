import { PizzaDecorator } from './PizzaDecorator';

class CheeseDecorator extends PizzaDecorator {
    private pizza: PizzaDecorator;

    constructor(pizza: PizzaDecorator) {
        super(pizza.getName() + ', Cheese');
        this.pizza = pizza;
    }

    getName(): string {
        return this.pizza.getName() + ', Cheese';
    }
}

export { CheeseDecorator };
