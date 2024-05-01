import { VehicleFactory } from "./VehicleFactory";
import { Car } from "./Car";
import { Vehicle } from "./Vehicle";

export class CarFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}
