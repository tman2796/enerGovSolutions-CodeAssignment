import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.employee'
})

export class EmployeeEntity {
    @Column()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @Column()
    isManager: boolean;

    @Column()
    roleId: string;
    
    @Column()
    managerId: number;
}