import { Request, Response } from 'express';
import { Coffee } from '../entities/Coffee';
import { MilkDecorator } from '../decorators/MilkDecorator';
import { SugarDecorator } from '../decorators/SugarDecorator';

class CoffeeController {
    static prepareCoffee(req: Request, res: Response) {
        // Prepara um café simples
        let coffee: Coffee = new Coffee('Simple Coffee');

        // Verifica se deve adicionar leite
        if (req.query.milk) {
            coffee = new MilkDecorator(coffee);
        }

        // Verifica se deve adicionar açúcar
        if (req.query.sugar) {
            coffee = new SugarDecorator(coffee);
        }

        res.status(200).json({ success: true, message: `Café preparado: ${coffee.getName()}` });
    }
}

export { CoffeeController };
