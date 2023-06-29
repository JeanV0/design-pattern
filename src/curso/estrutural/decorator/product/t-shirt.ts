import { ProductProtocol } from './product-protocol';
export class TShirt implements ProductProtocol {
    private name: string = 'Camiseta'

    constructor(private price: number) {}
    
    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
    
}