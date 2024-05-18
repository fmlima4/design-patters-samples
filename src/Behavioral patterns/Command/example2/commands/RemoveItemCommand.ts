import { Command } from './Command';
import { Order } from '../receivers/Order';

export class RemoveItemCommand implements Command {
    private order: Order;
    private item: string;

    constructor(order: Order, item: string) {
        this.order = order;
        this.item = item;
    }

    execute(): void {
        this.order.removeItem(this.item);
    }

    undo(): void {
        this.order.addItem(this.item);
    }
}
