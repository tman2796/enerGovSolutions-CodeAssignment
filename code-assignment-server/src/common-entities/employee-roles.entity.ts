import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.employee_roles'
})

export class EmployeeRoleEntity {
    @Column()
    employee_id: number;

   @Column()
   role_id: number;
}