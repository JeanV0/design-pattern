import { MealCompositeProtocol } from "../interfaces/meal.composite.contract";

export abstract class MealAbstract implements MealCompositeProtocol {
    constructor(private name: String, private price: number) {

    }
    getPrice(): number {
        return this.price;
    }
}