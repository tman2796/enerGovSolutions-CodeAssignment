import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.manager'
})

export class ManagerEntity {
    @Column()
    id: number;

    @Column()
    employeeId: number;

}