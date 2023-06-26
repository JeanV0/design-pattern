import { MealCompositeProtocol } from "../interfaces/meal.composite.contract";

export class MealBox implements MealCompositeProtocol {
    private readonly _children: MealCompositeProtocol[] = [];

    public get children(): MealCompositeProtocol[] {
        return this._children;
    };

    add(...meal: MealCompositeProtocol[]) {
        meal.forEach(item => this.children.push(item));
    }

    getPrice(): number {
        return this.children.reduce((sum, meal) => sum + meal.getPrice() , 0)
    };
}