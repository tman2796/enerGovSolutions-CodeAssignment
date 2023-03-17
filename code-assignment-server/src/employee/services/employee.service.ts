import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
    constructor(
      @InjectRepository(EmployeeEntity)
        private readonly employeeRepository: Repository<EmployeeEntity>){}
  findAll(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.find();
  }
}