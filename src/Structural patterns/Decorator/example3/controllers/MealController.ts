import { Request, Response } from 'express';
import { Meal } from '../entities/Meal';
import { MainCourse } from '../entities/MainCourse';
import { ProteinDecorator } from '../decorators/ProteinDecorator';
import { SideDishDecorator } from '../decorators/SideDishDecorator';
import { SauceDecorator } from '../decorators/SauceDecorator';

class MealController {
    static prepareMeal(req: Request, res: Response) {
        // Preparar prato principal
        let meal: Meal = new MainCourse('Pasta', 10);

        // Adicionar proteína (por exemplo, frango)
        if (req.query.protein) {
            meal = new ProteinDecorator(meal, req.query.protein as string, 3);
        }

        // Adicionar acompanhamento extra (por exemplo, salada)
        if (req.query.sideDish) {
            meal = new SideDishDecorator(meal, req.query.sideDish as string, 2);
        }

        // Adicionar molho (por exemplo, molho de tomate)
        if (req.query.sauce) {
            meal = new SauceDecorator(meal, req.query.sauce as string, 1);
        }

        res.status(200).json({ success: true, message: `Refeição preparada: ${meal.getName()}, Total: $${meal.getPrice()}` });
    }
}

export { MealController };
