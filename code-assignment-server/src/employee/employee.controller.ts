import { Controller, Get } from "@nestjs/common";
import { EmployeeDto } from "./dto/employee.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { EmployeeService } from "./services/employee.service";

@ApiTags('Employee')
@Controller('api/Employee')

export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
    @Get()
    async getEmployees(): Promise<EmployeeDto[]> {
       const employeeEntities = this.employeeService.findAll();
       const nonUniqueEmployees = (await employeeEntities).map((employeeEntity) => {
        const employeeEntityReturn : EmployeeDto = { id: employeeEntity.id, firstName: employeeEntity.firstName, 
            lastName: employeeEntity.lastName, isManager: employeeEntity.isManager, roles: [] }
            return employeeEntityReturn;
       })
       return nonUniqueEmployees;
    }
}