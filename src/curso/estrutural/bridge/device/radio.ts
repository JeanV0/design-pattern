import { DeviceImplementation } from "./device-implementation";

export class Radio implements DeviceImplementation {
    private volume = 10;
    private power = false;
    private name = 'TV';

    getName(): string {
        return this.name;
    }
    setPower(powerStatus: boolean): this {
        this.power = powerStatus;
        return this;
    }
    getPower(): boolean {
        return this.power
    }
    setVolume(volume: number): this {
        if (volume < 0) return this;
        if (volume > 100) return this;

        this.volume = volume;
        return this;
    }
    getVolume(): number {
        return this.volume;
    }

}