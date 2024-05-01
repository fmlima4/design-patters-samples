import { Request, Response } from 'express';
import { OldCalculator } from '../interfaces/OldCalculator';
import { NewCalculatorAdapter } from '../adapters/NewCalculatorAdapter';

class CalculatorController {
    static calculate(req: Request, res: Response) {
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
}

export { CalculatorController };
