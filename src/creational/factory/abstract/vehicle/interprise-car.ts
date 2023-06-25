import { Vehicle } from "./vehicle";


export class interpriseCar implements Vehicle {
    constructor(public name: string, private readonly customer: string) {}
    
    pickUp(): void {
        console.log(`${this.name} estar buscando ${this.customer}`)
    }
}