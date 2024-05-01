import { Request, Response, Router } from 'express';
import FactoryController from './Creational patterns/factory-method/index';
import AbstractFactoryController from './Creational patterns/abstract-factory/index';
import { CalculatorController } from './Structural patterns/adapter/example1/controllers/CalculatorController';
import { LogController } from './Structural patterns/adapter/example2/controllers/LogController';

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


export default routes;
