import { Request, Response } from 'express';
import { AnimalFactory } from "./example1/AnimalFactory";
import { CarFactory } from './example2/CarFactory';
import { BicycleFactory } from './example2/BicycleFactory';
import { Vehicle } from './example2/Vehicle';

class FactoryController {
    async factoryExample1(req: Request, res: Response) {
        try {
            const factory = new AnimalFactory();

            const animalToBuild = factory.createAnimal(req.body.animal); 
          
            res.status(200).json(animalToBuild);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    }

    async factoryExample2(req: Request, res: Response) {
        try {
            let vehicle: Vehicle;

            if (req.body.vehicle === 'Car') {
                const carFactory = new CarFactory();
                vehicle = carFactory.createVehicle();
            } else if (req.body.vehicle === 'Bicycle') {
                const bicycleFactory = new BicycleFactory();
                vehicle = bicycleFactory.createVehicle();
            } else {
                throw new Error('Vehicle type not supported.');
            }
    
            vehicle.drive();
            vehicle.stop();
    
            res.status(200).json({ message: `Vehicle ${req.body.vehicle} created successfully.` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    }
}

export default new FactoryController();
