export interface DeviceImplementation {
    getName(): string;
    setPower(powerStatus: boolean): this;
    getPower(): boolean;
    setVolume(volume: number): this;
    getVolume(): number;
}
