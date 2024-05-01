import { ArmyFactory } from "./ArmyFactory";
import { USASoldier } from "../products/USASoldier";
import { USATank } from "../products/USATank";
import { USAPlane } from "../products/USAPlane";

export class USAFactory extends ArmyFactory {
    createSoldier(): USASoldier {
        return new USASoldier();
    }
    createTank(): USATank {
        return new USATank();
    }
    createPlane(): USAPlane {
        return new USAPlane();
    }
}
