import { Soldier } from "../products/Soldier";
import { Tank } from "../products/Tank";
import { Plane } from "../products/Plane";

export abstract class ArmyFactory {
    abstract createSoldier(): Soldier;
    abstract createTank(): Tank;
    abstract createPlane(): Plane;
}
