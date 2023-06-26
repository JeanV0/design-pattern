import { CarFactory } from '../factories/car-factory';
import { Vehicle } from "../vehicle";
import { BicycleFactory } from '../factories/bicycle-factory';
import { randomNumbers } from '../utils/random-numbers';

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const car1 = carFactory.getVehicle('Fusca');
    const car2 = carFactory.getVehicle('Celta Preto');
    const bicycleFactory = new BicycleFactory();
    const bicycle = bicycleFactory.getVehicle('Motoca sem motor')
    const listVehicle = [car1,car2,bicycle];

    return listVehicle[randomNumbers(listVehicle.length)]
}