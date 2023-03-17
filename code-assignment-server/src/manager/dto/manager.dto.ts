import { EmployeeDto } from "../../employee/dto/employee.dto";

export interface ManagerDto extends EmployeeDto {
    managerId: number;
    employees?: EmployeeDto[];
}