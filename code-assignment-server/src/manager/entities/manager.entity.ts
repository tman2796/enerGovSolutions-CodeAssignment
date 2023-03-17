import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.managers'
})

export class ManagerEntity {
    @Column()
    manager_id: number;

    @Column()
    employee_Id: number;

}