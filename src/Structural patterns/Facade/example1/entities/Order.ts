import { Item } from './Item';

class Order {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    getItems(): Item[] {
        return this.items;
    }
}

export { Order };
