import { Temperature } from '../models/Temperature';

export interface Observer {
    update(temperature: Temperature): void;
    getId(): number;
}
