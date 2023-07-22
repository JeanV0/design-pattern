import { SmartHouseCommand } from "./command";
import { SmartHouseLight } from "./smart-house-light";

export class LightPowerCommand implements SmartHouseCommand {
    constructor(private readonly receiver: SmartHouseLight) {}
    
    execute(): void {
        this.receiver.on();
    }
    undo(): void {
        this.receiver.off();
    }
}