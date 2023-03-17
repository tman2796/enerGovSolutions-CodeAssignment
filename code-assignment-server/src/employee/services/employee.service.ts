import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRoleEntity } from 'src/common-entities/employee-roles.entity';

@Injectable()
export class EmployeeService {
    constructor(
      @InjectRepository(EmployeeEntity)
        private readonly employeeRepository: Repository<EmployeeEntity>){}
  findAll(): Promise<EmployeeEntity[]> {
    return this.employeeRepository.query('SELECT * FROM employees');
  }
  findAllEmployeeIds(): Promise<number[]> {
    return this.employeeRepository.query('SELECT id FROM employees');
  }
  findEmployeeRoles(): Promise<EmployeeRoleEntity[]> {
    return this.employeeRepository.query('SELECT * FROM employee_roles');
  }
}