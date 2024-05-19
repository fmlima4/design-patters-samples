import { Request, Response, Router } from 'express';
import FactoryController from './Creational patterns/factory-method/index';
import AbstractFactoryController from './Creational patterns/abstract-factory/example1/controller/AbstractFactoryController';
import { CalculatorController } from './Structural patterns/adapter/example1/controllers/CalculatorController';
import { LogController } from './Structural patterns/adapter/example2/Controllers/LogController';
import { BookController } from './Structural patterns/Bridge/example1';
import { NotificationController } from './Structural patterns/Bridge/example2';
import { CoffeeController } from './Structural patterns/Decorator/example1/controllers/CoffeeController';
import { PizzaController } from './Structural patterns/Decorator/example2/controllers/PizzaController';
import { MealController } from './Structural patterns/Decorator/example3/controllers/MealController';
import { OrderController } from './Structural patterns/Facade/example1/controllers/OrderController';
import { MessageController } from './Structural patterns/Facade/example2/controllers/MessageController';
import { LogControllerSingleton } from './Creational patterns/Singleton/example1/controllers/LogController';
import { DocumentController } from './Creational patterns/Prototype/example 1/controllers/DocumentController';
import { ReportController } from './Creational patterns/Prototype/example2/controllers/ReportController';
import { LightController } from './Behavioral patterns/Command/example1/controllers/LightController';
import { CommandOrderController } from './Behavioral patterns/Command/example2/controllers/OrderController';
import { IteratorBookController } from './Behavioral patterns/Iterator/example1/controllers/BookController';
import { MusicController } from './Behavioral patterns/Iterator/example2/controllers/MusicController';
import { ObserverNotificationController } from './Behavioral patterns/Observer/example1/controllers/NotificationController';
import { TemperatureController } from './Behavioral patterns/Observer/example2/controllers/TemperatureController';
import { PaymentController } from './Behavioral patterns/Template Method/example1/controllers/PaymentController';


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

routes.get('/decorator-3', (req: Request, res: Response) => {
  MealController.prepareMeal(req, res);
});

//facade examples
routes.post('/facade-1', (req: Request, res: Response) => {
  OrderController.placeOrder(req, res);
});

routes.post('/facade-2', (req: Request, res: Response) => {
  MessageController.sendMessage(req, res);
});

//singleton examples
routes.post('/singleton-1', (req: Request, res: Response) => {
  LogControllerSingleton.logMessage(req, res);
});

//prototype examples
routes.post('/prototype-1', (req: Request, res: Response) => {
  DocumentController.createDocument(req, res);
});

routes.post('/prototype-2', (req: Request, res: Response) => {
  ReportController.createReport(req, res);
});

//behavioral examples
const lightController = new LightController();
const orderController = new CommandOrderController();


routes.get('/command-1', (req: Request, res: Response) => {
  lightController.handleRequest(req, res);
});

routes.get('/command-2', (req: Request, res: Response) => {
  orderController.handleRequest(req, res);
});


//iterator examples
const bookController = new IteratorBookController();
const musicController  = new MusicController();

routes.get('/iterator-1', (req: Request, res: Response) => {
  bookController.getBooks(req, res);
});

routes.get('/iterator-2', (req: Request, res: Response) => {
  musicController.getMusic(req, res);
});

//observer examples
const notificationController = new ObserverNotificationController();

routes.post('/observer-1', (req: Request, res: Response) => {
  notificationController.sendNotification(req, res);
});
routes.post('/observer-1-2', (req: Request, res: Response) => {
  notificationController.addObserver(req, res);
});
routes.post('/observer-1-3', (req: Request, res: Response) => {
  notificationController.removeObserver(req, res);
});

const temperatureController = new TemperatureController();

routes.post('/observer-2', (req: Request, res: Response) => {
  temperatureController.setTemperature(req, res);
});

routes.post('/observer-2-2', (req: Request, res: Response) => {
  temperatureController.addObserver(req, res);
});

routes.post('/observer-2-3', (req: Request, res: Response) => {
  temperatureController.removeObserver(req, res);
});

//template examples
const paymentController = new PaymentController();

routes.post('/template-1', (req: Request, res: Response) => {
  paymentController.processPayment(req, res);
});


export default routes;
