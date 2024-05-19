import { Request, Response } from 'express';
import { ConcreteSubject } from '../observers/ConcreteSubject';
import { ConcreteObserver } from '../observers/ConcreteObserver';
import { Notification } from '../models/Notification';

class ObserverNotificationController {
    private subject: ConcreteSubject;

    constructor() {
        this.subject = new ConcreteSubject();
        // Adding some initial observers
        const observer1 = new ConcreteObserver('Observer 1');
        const observer2 = new ConcreteObserver('Observer 2');
        this.subject.addObserver(observer1);
        this.subject.addObserver(observer2);
    }

    sendNotification = (req: Request, res: Response): void => {
        const { message } = req.body;
        if (!message) {
            res.status(400).json({ error: 'Message is required' });
            return;
        }
        
        const notification = new Notification(message);
        this.subject.notifyObservers(notification);
        res.status(200).json({ message: 'Notification sent to all observers' });
    }

    addObserver = (req: Request, res: Response): void => {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ error: 'Observer name is required' });
            return;
        }

        const newObserver = new ConcreteObserver(name);
        this.subject.addObserver(newObserver);
        res.status(201).json({ message: `Observer ${name} added`, observerId: newObserver.getId() });
    }

    removeObserver = (req: Request, res: Response): void => {
        const { id } = req.body;
        if (!id) {
            res.status(400).json({ error: 'Observer ID is required' });
            return;
        }

        const observerToRemove = this.subject.getObservers().find(obs => obs.getId() === id);
        if (!observerToRemove) {
            res.status(404).json({ error: 'Observer not found' });
            return;
        }

        this.subject.removeObserver(observerToRemove);
        res.status(200).json({ message: `Observer ${id} removed` });
    }
}

export { ObserverNotificationController };
