import { Plane } from "./Plane";

export class RussianPlane extends Plane {
    attack(): void {
        console.log('Russian Plane is bombing the target!');
    }
}
