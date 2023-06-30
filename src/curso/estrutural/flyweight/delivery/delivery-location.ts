import { DeliveryFlyweight } from "./delivery-fltwight";

export class DeleveryLocation implements DeliveryFlyweight {
    constructor(private readonly dataShared: any) {}
    
    deliver(name: string, number: string): void {
        throw new Error("Method not implemented.");
    }

}