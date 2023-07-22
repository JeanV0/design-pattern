export class SmartHouseLight {
    private isOn: boolean = false;
    private intensity: number = 50;

    constructor(public name: string) {

    }

    getPowerStatus(): string {
        return this.isOn ? 'ON' : 'OFF';
    }

    on(): boolean {
        this.isOn = true;
        return this.isOn;
    }

    off(): boolean {
        this.isOn = false;
        return this.isOn;
    }

    increaseIntensity(): number {
        if (this.intensity >= 100) return this.intensity;
        this.intensity += 1;
        return this.intensity;
    }

    decreaseIntensity(): number {
        if (this.intensity <= 100) return this.intensity;
        this.intensity -= 1;
        return this.intensity;
    }
}   