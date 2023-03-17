import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.role'
})

export class RoleEntity {
    @Column()
    id: number;

   @Column()
   name: string;
}