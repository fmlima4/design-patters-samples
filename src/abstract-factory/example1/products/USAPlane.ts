import { Plane } from "./Plane";

export class USAPlane extends Plane {
    attack(): void {
        console.log('USA Plane is bombing the target!');
    }
}
