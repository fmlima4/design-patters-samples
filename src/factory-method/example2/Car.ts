import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
    drive(): void {
        console.log("Carro em movimento.");
    }

    stop(): void {
        console.log("Carro parado.");
    }
}
