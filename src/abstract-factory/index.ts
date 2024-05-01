import { Request, Response } from 'express';
import { ArmyFactory } from "./example1/factories/ArmyFactory";
import { USAFactory } from "./example1/factories/USAFactory";
import { RussianFactory } from "./example1/factories/RussianFactory";
import { simulateAttack, executeAction, defaultAction } from './example1/helper/Actions';
import { ActionTypes } from './example1/helper/ActionsTypes';

class AbstractFactoryController {
    async abstractFactoryExample1(req: Request, res: Response) {
        const action = req.query.action as ActionTypes;
        
        try {
            const usaArmy: ArmyFactory = new USAFactory(); 
            const russianArmy: ArmyFactory = new RussianFactory(); 

            if (action) {
                const { unit, message } = executeAction(action, usaArmy, russianArmy);
                simulateAttack(unit);
                return res.status(200).json({ message });
            }
            
            res.status(200).json(defaultAction(usaArmy, russianArmy));
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    }
}


export default new AbstractFactoryController;
