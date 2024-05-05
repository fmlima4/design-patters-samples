import { PizzaDecorator } from './PizzaDecorator';

class PepperoniDecorator extends PizzaDecorator {
    private pizza: PizzaDecorator;

    constructor(pizza: PizzaDecorator) {
        super(pizza.getName() + ', Pepperoni');
        this.pizza = pizza;
    }

    getName(): string {
        return this.pizza.getName() + ', Pepperoni';
    }
}

export { PepperoniDecorator };
