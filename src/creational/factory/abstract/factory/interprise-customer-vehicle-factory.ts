import { InterpriseCustumer } from "../customer/enterprise-customer";
import { interpriseCar } from "../vehicle/interprise-car";

export interface InterpriseVehicleFactory {
    MakeCustomer(customerName: string): InterpriseCustumer;
    MakeVehicle(vehicleName: string,customerName: string): interpriseCar;
}