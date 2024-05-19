import { Observer } from './Observer';
import { Temperature } from '../models/Temperature';

export class TemperatureSensor {
    private observers: Observer[] = [];
    private temperature: Temperature;

    constructor(initialTemperature: number) {
        this.temperature = new Temperature(initialTemperature);
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs.getId() !== observer.getId());
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(newTemperature: number): void {
        this.temperature = new Temperature(newTemperature);
        this.notifyObservers();
    }

    getObservers(): Observer[] {
        return this.observers;
    }
}
