import { Vehicle } from "./Vehicle";

export class Bicycle implements Vehicle {
    drive(): void {
        console.log("bicycle on moviment.");
    }

    stop(): void {
        console.log("Stopped bicycle.");
    }

    bicycleFunction(): void {
        console.log("bicycle jumping.");
    }
}
