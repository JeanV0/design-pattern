import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode() {
    const user = new SystemUserProxy('Luiz', 'Otavio');
    console.log(await user.getAddress());
}

clientCode()

