export abstract class ProductComponent {
    abstract getPrice(): number;
};

export class ProductBasic extends ProductComponent {
    constructor(public name: string, public price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

export class ProductComposed extends ProductComponent {
    private children: ProductComponent[] = [];

    constructor() {
        super();
    }

    add(product: ProductComponent): this {
        this.children.push(product);
        return this;
    }

    remove(product: ProductComponent): this {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
        return this;
    }

    getPrice(): number {
        return this.children.reduce((sum,child) => sum + child.getPrice(), 0);
    }

}