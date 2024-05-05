import { Meal } from './Meal';

class SideDish extends Meal {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        super();
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

export { SideDish };
