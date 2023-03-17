import { ManagerEntity } from './manager/entities/manager.entity';
import { RoleEntity } from './role/entities/role.entity';
import { EmployeeEntity } from './employee/entities/employee.entity';
import { EmployeeModule } from './employee/employee.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [
    EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'sa',
      database: 'enerGovSolutions',
      entities: [
        EmployeeEntity,
        RoleEntity,
        ManagerEntity
      ],
      options : { encrypt: false},
      synchronize: true,
      autoLoadEntities: true,
    }),
    ManagerModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
