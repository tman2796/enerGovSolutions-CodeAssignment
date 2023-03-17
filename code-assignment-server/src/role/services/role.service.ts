import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RoleService {
    constructor(
      @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>){}
  findAll(): Promise<RoleEntity[]> {
    return this.roleRepository.find();
  }
}