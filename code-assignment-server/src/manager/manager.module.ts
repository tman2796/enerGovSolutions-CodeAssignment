import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerEntity } from './entities/manager.entity';
import { ManagerController } from './manager.controller';
import { ManagerService } from './services/manager.service';


@Module({
    imports: [TypeOrmModule.forFeature([ManagerEntity])],
    controllers: [ManagerController],
    providers: [ManagerService],
  })

  export class ManagerModule {};