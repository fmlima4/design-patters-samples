import { ArmyFactory } from "../factories/ArmyFactory";
import { Soldier } from "../products/Soldier";
import { Tank } from "../products/Tank";
import { Plane } from "../products/Plane";
import { ActionTypes } from "./ActionsTypes";

function executeAction(action: ActionTypes, usaArmy: ArmyFactory, russianArmy: ArmyFactory): { unit: Soldier | Tank | Plane, message: string } {
    let unit: Soldier | Tank | Plane;
    let message: string;

    switch(action) {
        case ActionTypes.USASoldier:
            unit = usaArmy.createSoldier();
            message = 'Ataque do soldado dos EUA simulado com sucesso!'; 
            break;
        case ActionTypes.USATank:
            unit = usaArmy.createTank();
            message = 'Ataque do tanque dos EUA simulado com sucesso!';
            break;
        case ActionTypes.USAPlane:
            unit = usaArmy.createPlane();
            message = 'Ataque do avião dos EUA simulado com sucesso!';
            break;
        case ActionTypes.RussianSoldier:
            unit = russianArmy.createSoldier();
            message = 'Ataque do soldado russo simulado com sucesso!';
            break;
        case ActionTypes.RussianTank:
            unit = russianArmy.createTank();
            message = 'Ataque do tanque russo simulado com sucesso!';
            break;
        case ActionTypes.RussianPlane:
            unit = russianArmy.createPlane();
            message = 'Ataque do avião russo simulado com sucesso!';
            break;
        default:
            throw new Error('Ação não suportada.');
    }

    return { unit, message };
}


function simulateAttack(unit: Soldier | Tank | Plane): void {
    unit.attack();
}

function defaultAction(usaArmy: ArmyFactory, russianArmy: ArmyFactory){
    const usaSoldier: Soldier = usaArmy.createSoldier();
    const usaTank: Tank = usaArmy.createTank();
    const usaPlane: Plane = usaArmy.createPlane();
    const russianSoldier: Soldier = russianArmy.createSoldier();
    const russianTank: Tank = russianArmy.createTank();
    const russianPlane: Plane = russianArmy.createPlane();

    const data = {
        message: 'Unidades criadas com sucesso!',
        usaSoldier: usaSoldier.constructor.name,
        usaTank: usaTank.constructor.name,
        usaPlane: usaPlane.constructor.name,
        russianSoldier: russianSoldier.constructor.name,
        russianTank: russianTank.constructor.name,
        russianPlane: russianPlane.constructor.name
    };

    return data;
}

export { Soldier, Tank, Plane, simulateAttack, executeAction, defaultAction };
