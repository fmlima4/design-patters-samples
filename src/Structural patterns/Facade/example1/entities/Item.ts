class Item {
    constructor(private name: string, private price: number) {}

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

export { Item };
