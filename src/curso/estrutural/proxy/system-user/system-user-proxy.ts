import { AdminUser } from "./admin-user";
import { SystemUserAddressProtocol, SystemUserProtocol } from "./system-user-protocol";

export class SystemUserProxy implements SystemUserProtocol {
    private realUser?: SystemUserProtocol;
    private realUserAddress?: SystemUserAddressProtocol;
    
    constructor(public firstname: string, public userName: string) {}
    
    async getAddress(): Promise<SystemUserAddressProtocol> {
        this.createUser();
        return new Promise((resolve,reject) => {
            return setTimeout(() => resolve(
                { street: 'Santa ines', number: 1 }
            ));
        });
    }

    private createUser(): SystemUserProtocol {
        if(this.realUser === undefined) {
            this.realUser = new AdminUser(this.firstname, this.userName);
            return this.realUser;
        } else {
            return this.realUser;
        }        
    }

}