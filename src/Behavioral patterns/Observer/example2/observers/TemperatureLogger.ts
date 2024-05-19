import { Observer } from './Observer';
import { Temperature } from '../models/Temperature';

export class TemperatureLogger implements Observer {
    private id: number;

    constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }

    update(temperature: Temperature): void {
        console.log(`Logger ${this.id} recording new temperature: ${temperature.value}°C`);
    }

    getId(): number {
        return this.id;
    }
}
