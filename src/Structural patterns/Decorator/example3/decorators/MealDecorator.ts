import { Meal } from '../entities/Meal';

abstract class MealDecorator extends Meal {
    protected meal: Meal;

    constructor(meal: Meal) {
        super();
        this.meal = meal;
    }
}

export { MealDecorator };
