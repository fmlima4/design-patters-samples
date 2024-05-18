import { Request, Response } from 'express';
import { Light } from '../receivers/Light';
import { LightOnCommand } from '../commands/LightOnCommand';
import { LightOffCommand } from '../commands/LightOffCommand';
import { Command } from '../commands/Command';

class LightController {
    private light: Light;
    private lightOnCommand: Command;
    private lightOffCommand: Command;

    constructor() {
        this.light = new Light();
        this.lightOnCommand = new LightOnCommand(this.light);
        this.lightOffCommand = new LightOffCommand(this.light);
    }

    handleRequest = (req: Request, res: Response): void => {
        const action = req.query.action as string;

        try {
            if (action === 'on') {
                this.lightOnCommand.execute();
                res.status(200).json({ message: 'Light turned on' });
            } else if (action === 'off') {
                this.lightOffCommand.execute();
                res.status(200).json({ message: 'Light turned off' });
            } else if (action === 'undo-on') {
                this.lightOnCommand.undo();
                res.status(200).json({ message: 'Undo light on' });
            } else if (action === 'undo-off') {
                this.lightOffCommand.undo();
                res.status(200).json({ message: 'Undo light off' });
            } else {
                res.status(400).json({ message: 'Invalid action' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    }
}

export { LightController };
