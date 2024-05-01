import { Request, Response, Router } from 'express';
import FactoryController from './factory-method/index';
import AbstractFactoryController from './abstract-factory/index';

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

export default routes;
