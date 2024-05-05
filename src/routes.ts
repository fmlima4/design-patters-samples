import { Request, Response, Router } from 'express';
import FactoryController from './Creational patterns/factory-method/index';
import AbstractFactoryController from './Creational patterns/abstract-factory/example1/controller/AbstractFactoryController';
import { CalculatorController } from './Structural patterns/adapter/example1/controllers/CalculatorController';
import { LogController } from './Structural patterns/adapter/example2/Controllers/LogController';
import { BookController } from './Structural patterns/Bridge/example1';
import { NotificationController } from './Structural patterns/Bridge/example2';
import { CoffeeController } from './Structural patterns/Decorator/example1/controllers/CoffeeController';
import { PizzaController } from './Structural patterns/Decorator/example2/controllers/PizzaController';

const routes = Router();

//factory examples
routes.get('/factory-method-1', (req: Request, res: Response) => {
  FactoryController.factoryExample1(req, res);
});
routes.get('/factory-method-2', (req: Request, res: Response) => {
  FactoryController.factoryExample2(req, res);
});

//abstract factory examples
routes.get('/abstract-factory-1', (req: Request, res: Response) => {
    AbstractFactoryController.abstractFactoryExample1(req, res);
  });

//adapter examples
routes.get('/adapter-1', (req: Request, res: Response) => {
  CalculatorController.calculate(req, res);
});

routes.get('/adapter-2', (req: Request, res: Response) => {
  LogController.log(req, res);
});

//bridge examples
routes.get('/bridge-1', (req: Request, res: Response) => {
  BookController.openBook(req, res);
});

routes.post('/bridge-2/:type', (req: Request, res: Response) => {
  NotificationController.sendNotification(req, res);
});

//decorator examples
routes.get('/decorator-1', (req: Request, res: Response) => {
  CoffeeController.prepareCoffee(req, res);
});

routes.get('/decorator-2', (req: Request, res: Response) => {
  PizzaController.preparePizza(req, res);
});

export default routes;
