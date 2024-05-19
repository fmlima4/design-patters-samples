import { Observer } from './Observer';
import { Temperature } from '../models/Temperature';

export class TemperatureDisplay implements Observer {
    private id: number;

    constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }

    update(temperature: Temperature): void {
        console.log(`Display ${this.id} showing new temperature: ${temperature.value}°C`);
    }

    getId(): number {
        return this.id;
    }
}
