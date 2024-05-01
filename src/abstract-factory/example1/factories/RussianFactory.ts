import { ArmyFactory } from "./ArmyFactory";
import { RussianSoldier } from "../products/RussianSoldier";
import { RussianTank } from "../products/RussianTank";
import { RussianPlane } from "../products/RussianPlane";

export class RussianFactory extends ArmyFactory {
    createSoldier(): RussianSoldier {
        return new RussianSoldier();
    }
    createTank(): RussianTank {
        return new RussianTank();
    }
    createPlane(): RussianPlane {
        return new RussianPlane();
    }
}
