import { Car } from "../car";
import { Vehicle } from "../vehicle";

export abstract class VehicleFactory {
    // Factory method
    abstract getVehicle(name: string): Vehicle;

    pickUp(customerName: string, vecicleName: string): Vehicle {
        const car = new Car(vecicleName);
        car.pickUp(customerName);
        return car;
    }
    stop(vecicleName: string): void {
        console.log(`${vecicleName} parou atualmente`);
    }
}