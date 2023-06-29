import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.togglePower(); // true

    if (!('volumeUp' in abstraction)) return;

    abstraction.volumeUp();
    abstraction.volumeUp();
    abstraction.volumeUp();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);