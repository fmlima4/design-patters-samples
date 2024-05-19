import { Observer } from './Observer';
import { Notification } from '../models/Notification';

export class ConcreteSubject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs.getId() !== observer.getId());
    }

    notifyObservers(notification: Notification): void {
        for (const observer of this.observers) {
            observer.update(notification);
        }
    }

    getObservers(): Observer[] {
        return this.observers;
    }
}
