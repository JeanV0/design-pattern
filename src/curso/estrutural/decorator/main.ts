import { ProductDecorator } from "./product/product-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt(12.3);
const decorator = new ProductDecorator(tShirt);
console.log(decorator.getPrice());