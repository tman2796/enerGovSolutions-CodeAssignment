import { Controller, Get } from "@nestjs/common";
import { ManagerDto } from "./dto/manager.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { ManagerService } from "./services/manager.service";
import { ManagerEntity } from "./entities/manager.entity";
import { EmployeeService } from "src/employee/services/employee.service";
import { RoleService } from "src/role/services/role.service";

@ApiTags('Manager')
@Controller('api/Manager')

export class ManagerController {
    constructor(private readonly managerService: ManagerService,
        private readonly employeeService: EmployeeService,
        private readonly roleService: RoleService){}
    @Get()
    async getManagers(): Promise<ManagerDto[]> {
        const managerEntities = await this.managerService.findAll();
        const employeeIds = await this.employeeService.findAllEmployeeIds();
        const managerList = managerEntities.map((manager: ManagerEntity, index) => {
            const employeeId = employeeIds.find((employeeIdEntity : number) => employeeIdEntity === manager.employee_Id);
            const managerDto: ManagerDto = { managerId: manager.manager_id, roles: [], employees: [], 
                firstName: 'testFirstName', lastName: 'testLastName',isManager: true, id: index  }
                return managerDto; 
        })
        return managerList;
    }
}