import { DeviceImplementation } from "../device/device-implementation";
import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
    constructor(device: DeviceImplementation) {
        super(device);
    }

    volumeUp(): this {
        this.device.setVolume(this.device.getVolume() + 10)
        return this;
    }

    volumeDown(): this {
        this.device.setVolume(this.device.getVolume() - 10)
        return this;
    }

}