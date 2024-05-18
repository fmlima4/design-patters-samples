import { Command } from './Command';
import { Order } from '../receivers/Order';

export class AddItemCommand implements Command {
    private order: Order;
    private item: string;

    constructor(order: Order, item: string) {
        this.order = order;
        this.item = item;
    }

    execute(): void {
        this.order.addItem(this.item);
    }

    undo(): void {
        this.order.removeItem(this.item);
    }
}
