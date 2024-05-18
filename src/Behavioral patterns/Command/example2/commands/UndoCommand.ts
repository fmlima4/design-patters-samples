import { Command } from './Command';

export class UndoCommand implements Command {
    private history: Command[];

    constructor(history: Command[]) {
        this.history = history;
    }

    execute(): void {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }

    undo(): void {
        // Not applicable for undo command itself
    }
}
