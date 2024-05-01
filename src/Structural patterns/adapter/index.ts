import { Request, Response } from 'express';
import { NewCalculatorAdapter } from './example1/adapters/NewCalculatorAdapter';
import { OldCalculator } from './example1/interface/OldCalculator';


class AdapterController {
    async adapterExample1(req: Request, res: Response) {
            const oldCalculator: OldCalculator = new NewCalculatorAdapter();
            const { num1, num2 } = req.body;
            
            try {
                const result = oldCalculator.calculate(num1, num2);
                res.json({ result });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
            }
        }


    async adapterExample2(req: Request, res: Response) {
        try {
    
          
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    }
}

export default new AdapterController();
