import { Meal } from '../entities/Meal';
import { MealDecorator } from './MealDecorator';

class SauceDecorator extends MealDecorator {
    private sauce: string;
    private saucePrice: number;

    constructor(meal: Meal, sauce: string, saucePrice: number) {
        super(meal);
        this.sauce = sauce;
        this.saucePrice = saucePrice;
    }

    getName(): string {
        return `${this.meal.getName()} with ${this.sauce}`;
    }

    getPrice(): number {
        return this.meal.getPrice() + this.saucePrice;
    }
}

export { SauceDecorator };
