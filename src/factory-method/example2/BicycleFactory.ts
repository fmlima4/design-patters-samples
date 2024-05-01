import { VehicleFactory } from "./VehicleFactory";
import { Bicycle } from "./Bicycle";
import { Vehicle } from "./Vehicle";

export class BicycleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new Bicycle();
    }
}
