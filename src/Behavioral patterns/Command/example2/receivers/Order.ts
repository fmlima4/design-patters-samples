export class Order {
    private items: string[] = [];

    addItem(item: string): void {
        this.items.push(item);
        console.log(`Added ${item}`);
    }

    removeItem(item: string): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`Removed ${item}`);
        }
    }

    getItems(): string[] {
        return this.items;
    }
}
