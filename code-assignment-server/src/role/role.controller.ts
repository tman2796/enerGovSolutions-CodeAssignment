import { Controller, Get } from "@nestjs/common";
import { RoleDto } from "./dto/role.dto";
import { ApiTags } from "@nestjs/swagger/dist/decorators/api-use-tags.decorator";
import { RoleService } from "./services/role.service";
import { RoleEntity } from "./entities/role.entity";

@ApiTags('Role')
@Controller('api/Role')

export class RoleController {
    constructor(private readonly roleService: RoleService){}

    @Get()
    async getRoles(): Promise<RoleDto[]> {
        const roleEntityList = this.roleService.findAll();
        const roleDtoList = (await roleEntityList).map((roleEntity: RoleEntity) => {
            const roleReturn : RoleDto = {Id: roleEntity.id, name: roleEntity.name};
            return roleReturn;
        })
        return roleDtoList;
    }
}