import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmpService } from './emp.service';
import { EmpDto } from './emp.dto';



@Controller('emp')
export class EmpController {
    constructor(private readonly employeeService: EmpService){}

    @Post('create')
    create(@Body() employeeDto: EmpDto) {
        return this.employeeService.create(employeeDto);
  }

    @Get()
    findAll() {
        return this.employeeService.findAll();
  }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.employeeService.findOne(id);
  }

    @Put(':id')
    update(@Param('id') id: number, @Body() employeeDto: EmpDto) {
        return this.employeeService.update(id, employeeDto);
  }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.employeeService.remove(id);
  }

}
