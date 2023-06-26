import { Bicycle } from "../bicycle";
import { Vehicle } from "../vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory {
    getVehicle(name: string): Vehicle {
        return new Bicycle(name);
    }

}