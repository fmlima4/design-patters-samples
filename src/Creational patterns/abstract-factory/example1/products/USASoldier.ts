import { Soldier } from "./Soldier";

export class USASoldier extends Soldier {
    attack(): void {
        console.log('USA Soldier is attacking!');
    }
}
