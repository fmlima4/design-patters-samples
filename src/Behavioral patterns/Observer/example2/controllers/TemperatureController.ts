import { Request, Response } from 'express';
import { TemperatureSensor } from '../observers/TemperatureSensor';
import { TemperatureDisplay } from '../observers/TemperatureDisplay';
import { TemperatureLogger } from '../observers/TemperatureLogger';

class TemperatureController {
    private sensor: TemperatureSensor;

    constructor() {
        this.sensor = new TemperatureSensor(25); // Initial temperature

        // Adding initial observers
        const display = new TemperatureDisplay();
        const logger = new TemperatureLogger();
        this.sensor.addObserver(display);
        this.sensor.addObserver(logger);
    }

    setTemperature = (req: Request, res: Response): void => {
        const { value } = req.body;
        if (value === undefined) {
            res.status(400).json({ error: 'Temperature value is required' });
            return;
        }

        this.sensor.setTemperature(value);
        res.status(200).json({ message: 'Temperature updated' });
    }

    addObserver = (req: Request, res: Response): void => {
        const { type } = req.body;
        if (!type) {
            res.status(400).json({ error: 'Observer type is required' });
            return;
        }

        let newObserver;
        if (type === 'display') {
            newObserver = new TemperatureDisplay();
        } else if (type === 'logger') {
            newObserver = new TemperatureLogger();
        } else {
            res.status(400).json({ error: 'Unknown observer type' });
            return;
        }

        this.sensor.addObserver(newObserver);
        res.status(201).json({ message: `Observer ${type} added`, observerId: newObserver.getId() });
    }

    removeObserver = (req: Request, res: Response): void => {
        const { id } = req.body;
        if (!id) {
            res.status(400).json({ error: 'Observer ID is required' });
            return;
        }

        const observerToRemove = this.sensor.getObservers().find(obs => obs.getId() === id);
        if (!observerToRemove) {
            res.status(404).json({ error: 'Observer not found' });
            return;
        }

        this.sensor.removeObserver(observerToRemove);
        res.status(200).json({ message: `Observer ${id} removed` });
    }
}

export { TemperatureController };
