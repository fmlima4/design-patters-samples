import { Request, Response } from 'express';
import { Pizza } from '../entities/Pizza';
import { CheeseDecorator } from '../decorators/CheeseDecorator';
import { PepperoniDecorator } from '../decorators/PepperoniDecorator';

class PizzaController {
    static preparePizza(req: Request, res: Response) {
        // Prepara uma pizza simples
        let pizza: Pizza = new Pizza('Simple Pizza');

        // Verifica se deve adicionar queijo
        if (req.query.cheese) {
            pizza = new CheeseDecorator(pizza);
        }

        // Verifica se deve adicionar pepperoni
        if (req.query.pepperoni) {
            pizza = new PepperoniDecorator(pizza);
        }

        res.status(200).json({ success: true, message: `Pizza preparada: ${pizza.getName()}` });
    }
}

export { PizzaController };
