import { randomCarAlgorithm } from "./main/random-vehicle-algorith";

for (let i = 0; i< 10; i++) {
    const car = randomCarAlgorithm()
    car.pickUp('Jean');
    car.stop();
}

// const carFactory = new CarFactory();

// const fusca = carFactory.getVehicle('fusca');

// const fusca = new Car('Fusca')

// fusca.pickUp('Joana');
// fusca.stop();

// const celta = new Car('Fusca')

// celta.pickUp('Joana');
// celta.stop();