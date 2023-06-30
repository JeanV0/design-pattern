export type SystemUserAddressProtocol = {
    street: string,
    number: number,
}

export interface SystemUserProtocol {
    firstname: string;
    userName: string;

    getAddress(): Promise<SystemUserAddressProtocol>;

}