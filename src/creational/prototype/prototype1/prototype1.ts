export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype{
    constructor(public rua: string) {}
    
    clone(): Prototype {
        throw new Error("Method not implemented.");
    }
}

export class Person implements Prototype {

    constructor(public name: string, public address: Address) {

    }

    clone(): Prototype {
        const newObject = new Person(this.name, this.address);
        return newObject;
    }
}

const person1 = new Person('Jean', new Address('Av legal'));
const person2 = person1.clone();