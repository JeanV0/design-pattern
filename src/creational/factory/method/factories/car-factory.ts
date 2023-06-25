
import { Car } from '../car';
import { Vehicle } from '../vehicle';
import { VehicleFactory } from './vehicle-factory';

export class CarFactory extends VehicleFactory {
    getVehicle(name: string): Vehicle {
        return new Car(name);
    }

}