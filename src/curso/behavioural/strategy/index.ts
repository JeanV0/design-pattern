// export interface ECommerceProductProtocol {
//     name: string;
//     price: number;
// }

// export class ECommerceShoppingCart {
//     private products: ECommerceProductProtocol[] = [];
//     private discount: number = 0;

//     addProduct(...products: ECommerceProductProtocol[]): this {
//         products.forEach((product) => this.products.push(product));
//         return this;
//     }

//     getProducts(): ECommerceProductProtocol[] {
//         return this.products;
//     }

//     getTotal(): number {
//         return this.getProducts().reduce((sum,product) => sum + product.price, 0);
//     }

//     getTotalWithDiscount(): number {
//         const total = this.getTotal();
//         if (total >= 100 && total <= 200) {
//             this.discount = 20;
//         }

//         return total - (total * (this.discount / 100))
//     }
// }

import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { DefaultDiscount } from './shopping-cart/default-discount';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());