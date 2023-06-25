import { Customer } from "../customer/customer";
import { Vehicle } from "../vehicle/vehicle";

export interface CustomerVehicleFactory {
    MakeCustomer(customerName: string): Customer;
    MakeVehicle(vehicleName: string,customerName: string): Vehicle;
}