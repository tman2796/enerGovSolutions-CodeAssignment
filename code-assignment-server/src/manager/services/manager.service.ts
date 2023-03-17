import { Injectable } from '@nestjs/common';
import { ManagerEntity } from '../entities/manager.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ManagerService {
    constructor(
      @InjectRepository(ManagerEntity)
        private readonly managerRepository: Repository<ManagerEntity>){}
  findAll(): Promise<ManagerEntity[]> {
    return this.managerRepository.find();
  }
}