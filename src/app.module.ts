import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EmpModule} from './emp/emp.module';
import { EmpService } from './emp/emp.service';
import { EmpController } from './emp/emp.controller';

@Module({
  imports: [EmpModule],
  controllers: [AppController, EmpController],
  providers: [AppService, EmpService],
})
export class AppModule {}
