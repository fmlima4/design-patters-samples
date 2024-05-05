import { Meal } from '../entities/Meal';
import { MealDecorator } from './MealDecorator';

class SideDishDecorator extends MealDecorator {
    private sideDish: string;
    private sideDishPrice: number;

    constructor(meal: Meal, sideDish: string, sideDishPrice: number) {
        super(meal);
        this.sideDish = sideDish;
        this.sideDishPrice = sideDishPrice;
    }

    getName(): string {
        return `${this.meal.getName()} with ${this.sideDish}`;
    }

    getPrice(): number {
        return this.meal.getPrice() + this.sideDishPrice;
    }
}

export { SideDishDecorator };
