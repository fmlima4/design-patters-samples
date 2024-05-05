import { Meal } from '../entities/Meal';
import { MealDecorator } from './MealDecorator';

class ProteinDecorator extends MealDecorator {
    private protein: string;
    private proteinPrice: number;

    constructor(meal: Meal, protein: string, proteinPrice: number) {
        super(meal);
        this.protein = protein;
        this.proteinPrice = proteinPrice;
    }

    getName(): string {
        return `${this.meal.getName()} with ${this.protein}`;
    }

    getPrice(): number {
        return this.meal.getPrice() + this.proteinPrice;
    }
}

export { ProteinDecorator };
