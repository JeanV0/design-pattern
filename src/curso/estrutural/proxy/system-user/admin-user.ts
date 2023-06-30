import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    constructor(public firstname: string, public userName: string) {}
    
    async getAddress(): Promise<SystemUserAddressProtocol> {
        return new Promise((resolve,reject) => {
            return setTimeout(() => resolve(
                { street: 'Santa ines', number: 1 }
            ));
        });
    }

}