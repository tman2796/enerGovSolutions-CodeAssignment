import { RoleDto } from "../../role/dto/role.dto";

export interface EmployeeDto {
    id: number;
    firstName: string;
    lastName: string;
    isManager: boolean;
    roles?: RoleDto[];
}