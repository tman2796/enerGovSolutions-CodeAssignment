import { Entity, Column } from 'typeorm';

@Entity({
    name: 'dbo.roles'
})

export class RoleEntity {
    @Column()
    id: number;

   @Column()
   name: string;
}