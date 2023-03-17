import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.employees'
})

export class EmployeeEntity {
    @Column()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
    
    @Column()
    manager_id: number;
}