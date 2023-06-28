import { ProductBasic, ProductComposed } from "./product.composite";

const camiseta = new ProductBasic('Camiseta',50);
const cueca = new ProductBasic('Cueca',50);
const calca = new ProductBasic('Calca',50);

const box = new ProductComposed()
    .add(camiseta)
    .add(cueca)
    .add(calca);

console.log(box.getPrice());
