import { Soldier } from "./Soldier";

export class RussianSoldier extends Soldier {
    attack(): void {
        console.log('Russian Soldier is attacking!');
    }
}
