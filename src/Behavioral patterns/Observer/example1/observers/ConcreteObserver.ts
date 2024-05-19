import { Observer } from './Observer';
import { Notification } from '../models/Notification';

export class ConcreteObserver implements Observer {
    private id: number;

    constructor(private name: string) {
        this.id = Math.floor(Math.random() * 1000);
    }

    update(notification: Notification): void {
        console.log(`Observer ${this.id} (${this.name}) received notification: ${notification.message}`);
    }

    getId(): number {
        return this.id;
    }
}
