import { Request, Response } from 'express';
import { Order } from '../receivers/Order';
import { AddItemCommand } from '../commands/AddItemCommand';
import { RemoveItemCommand } from '../commands/RemoveItemCommand';
import { UndoCommand } from '../commands/UndoCommand';
import { Command } from '../commands/Command';

class CommandOrderController {
    private order: Order;
    private history: Command[];

    constructor() {
        this.order = new Order();
        this.history = [];
    }

    handleRequest = (req: Request, res: Response): void => {
        const action = req.query.action as string;
        const item = req.query.item as string;

        try {
            let command: Command;

            switch (action) {
                case 'add':
                    command = new AddItemCommand(this.order, item);
                    break;
                case 'remove':
                    command = new RemoveItemCommand(this.order, item);
                    break;
                case 'undo':
                    command = new UndoCommand(this.history);
                    command.execute();
                    res.status(200).json({ message: 'Last action undone', items: this.order.getItems() });
                    return;
                default:
                    res.status(400).json({ message: 'Invalid action' });
                    return;
            }

            command.execute();
            this.history.push(command);
            res.status(200).json({ message: `Action ${action} executed`, items: this.order.getItems() });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    }
}

export { CommandOrderController };
