import { DeviceImplementation } from "../device/device-implementation";

export class RemoteControl {
    constructor(protected device: DeviceImplementation) {}

    togglePower(): this {
        this.device.setPower(!this.device.getPower());
        return this;
    }
}