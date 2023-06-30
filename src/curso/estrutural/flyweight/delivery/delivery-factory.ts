import { DeliveryFlyweight } from "./delivery-fltwight";
import { DeleveryLocation } from "./delivery-location";
import { DeliveryLocationData } from "./delivery-types";

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = {};

    private createId(data: DeliveryLocationData): string {
        return Object.values(data)
        .map(item => item.replace(/\s+/, '').toLowerCase())
        .join('_')
    }

    makeLocation(intrinsiticState: DeliveryLocationData): DeliveryFlyweight {
        const key = this.createId(intrinsiticState);
        if (key in this.locations) return this.locations[key];
        this.locations[key] = new DeleveryLocation(intrinsiticState);
        return this.locations[key];
    }

    getLocations(): DeliveryLocationDictionary {
        return this.locations;
    }
}

export type DeliveryLocationDictionary = { [k: string]: DeleveryLocation };