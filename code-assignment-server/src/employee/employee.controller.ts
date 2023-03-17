import { RoleService } from 'src/role/services/role.service';
import { ManagerService } from './../manager/services/manager.service';
import { Controller, Get } from "@nestjs/common";
import { EmployeeDto } from "./dto/employee.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { EmployeeService } from "./services/employee.service";

@ApiTags('Employee')
@Controller('api/Employee')

export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService,
        private readonly managerService: ManagerService,
        private readonly roleService: RoleService){}
    @Get()
    async getEmployees(): Promise<EmployeeDto[]> {
        const employeeEntities = await this.employeeService.findAll();
        const managerEntities = await this.managerService.findAll();
        const employeeRoleEntities = await this.employeeService.findEmployeeRoles();
        const roleEntities = await this.roleService.findAll();

       const nonUniqueEmployees = employeeEntities.map((employeeEntity) => {
        const employeeRoleEntity = employeeRoleEntities.find((roleEntity) => roleEntity.employee_id === employeeEntity.id);
        const roleEntity = roleEntities.find((roleEntity) => roleEntity.id === employeeRoleEntity?.role_id);
        const manager = managerEntities.find((managerEntity) => managerEntity.employee_Id === employeeEntity.id);
        const employeeEntityReturn : EmployeeDto = { id: employeeEntity.id, firstName: employeeEntity.first_name, 
            lastName: employeeEntity.last_name, roles: [
                {
                    Id: roleEntity ? roleEntity.id : 0,
                    name: roleEntity ? roleEntity.name: 'no_name'
                }
            ],
            isManager: manager ? true : false
         }
            return employeeEntityReturn;
       }) as EmployeeDto[];
       return nonUniqueEmployees;
    }
}