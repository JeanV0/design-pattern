import { MealBox } from "./classes/meal-box";
import { Beans, Rice } from "./classes/rice";

const rice = new Rice('Rice', 12);
const beans = new Beans('Beans',900);

const box = new MealBox();

box.add(rice, beans);