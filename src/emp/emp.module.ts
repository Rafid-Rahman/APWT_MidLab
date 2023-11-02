import { Module } from '@nestjs/common';
import { EmpController } from './emp.controller';
import { EmpService } from './emp.service';

@Module({
  controllers: [EmpController],
  providers: [EmpService]
})
export class EmpModule {}
